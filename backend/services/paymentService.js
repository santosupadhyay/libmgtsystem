const stripeRepository = require('../repositories/stripeRepository');
const bookRepositoryFunction = require('../repositories/bookRepository');
const Book = require('../models/Book');

const bookRepository = bookRepositoryFunction(Book)

const paymentService = {
    createCheckoutSession: async ({ bookId, userEmail, borrowFee }) => {
        try {
            // Get book details
            console.log(bookId)
            const book = await bookRepository.getBookById(bookId);
            if (!book) {
                throw new Error('Book not found');
            }

            // Use provided borrowFee or calculate from book price
            const finalBorrowFee = borrowFee || book.price * 0.1;

            const sessionData = {
                payment_method_types: ['card'],
                line_items: [
                    {
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: book.title,
                                metadata: {
                                    bookId: book._id.toString()
                                }
                            },
                            unit_amount: Math.round(finalBorrowFee * 100),
                        },
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                success_url: `${process.env.FRONTEND_URL}/success`,
                cancel_url: `${process.env.FRONTEND_URL}/cancel`,
                customer_email: userEmail,
                metadata: {
                    bookId: book._id.toString(),
                    userEmail: userEmail,
                    type: 'book_borrow'
                }
            };

            return await stripeRepository.createCheckoutSession(sessionData);
        } catch (error) {
            throw new Error(`Payment service error: ${error.message}`);
        }
    },

    // handleWebhook: async (payload, signature) => {
    //     try {
    //         const event = await stripeRepository.constructWebhookEvent(payload, signature);
            
    //         switch (event.type) {
    //             case 'checkout.session.completed':
    //                 return await handlePaymentSuccess(event.data.object);
    //             case 'checkout.session.expired':
    //                 return await handlePaymentExpired(event.data.object);
    //             default:
    //                 return { handled: false, type: event.type };
    //         }
    //     } catch (error) {
    //         throw new Error(`Webhook handling error: ${error.message}`);
    //     }
    // },

    // verifyPayment: async (sessionId) => {
    //     try {
    //         const session = await stripeRepository.retrieveCheckoutSession(sessionId);
    //         return session.payment_status;
    //     } catch (error) {
    //         throw new Error(`Payment verification error: ${error.message}`);
    //     }
    // }
};


module.exports = paymentService;