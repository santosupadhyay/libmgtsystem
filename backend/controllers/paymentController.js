const paymentService = require("../services/paymentService");

const paymentController = {
  createCheckoutSession: async (req, res) => {
    console.log(req.body);
    try {
      const { bookId, userEmail, borrowFee } = req.body;
      console.log(bookId, userEmail, borrowFee);

      const session = await paymentService.createCheckoutSession({
        bookId,
        userEmail,
        borrowFee,
      });

      res.json({
        success: true,
        sessionId: session.id,
        url:session.url
      });
    } catch (error) {
      console.log(`payment route hit`);
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },

  // handleWebhook: async (req, res) => {
  //     try {
  //         const signature = req.headers['stripe-signature'];
  //         const result = await paymentService.handleWebhook(req.body, signature);

  //         res.status(200).json({ received: true });
  //     } catch (error) {
  //         res.status(400).json({ error: error.message });
  //     }
  // },

  // verifyPayment: async (req, res) => {
  //     try {
  //         const { sessionId } = req.params;
  //         const paymentStatus = await paymentService.verifyPayment(sessionId);

  //         res.json({
  //             success: true,
  //             status: paymentStatus
  //         });
  //     } catch (error) {
  //         res.status(500).json({
  //             success: false,
  //             message: error.message
  //         });
  //     }
  // }
};

module.exports = paymentController;
