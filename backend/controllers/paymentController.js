const paymentService = require("../services/paymentService");

const createCheckout = async (request, response) => {
  try {
    const { bookId, userEmail } = request.body;
    if (!bookId || !userEmail) {
      return response.status(400).json({
        success: false,
        message: "bookId and userEmail are required in the request body",
      });
    }
    const session = await paymentService.createCheckoutSession(
      bookId,
      userEmail
    );
    response.status(200).json({
      success: true,
      message: "Payment successful",
      sessionId: session.id,
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createCheckout,
};
