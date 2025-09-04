const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const stripeRepository = {
    createCheckoutSession: async (sessionData) => {
        try {
            console.log('sessionData: ', sessionData)
            return await stripe.checkout.sessions.create(sessionData);
        } catch (error) {
            throw new Error(`Stripe API Error: ${error.message}`);
        }
    },

    // retrieveCheckoutSession: async (sessionId) => {
    //     try {
    //         return await stripe.checkout.sessions.retrieve(sessionId);
    //     } catch (error) {
    //         throw new Error(`Stripe API Error: ${error.message}`);
    //     }
    // },

    // constructWebhookEvent: async (payload, signature) => {
    //     try {
    //         const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    //         return stripe.webhooks.constructEvent(payload, signature, webhookSecret);
    //     } catch (error) {
    //         throw new Error(`Webhook verification error: ${error.message}`);
    //     }
    // }
};

module.exports = stripeRepository;