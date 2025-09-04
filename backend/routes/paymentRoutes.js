const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Create checkout session
router.post('/create-checkout-session', paymentController.createCheckoutSession);

// // Handle Stripe webhooks
// router.post('/webhook', express.raw({type: 'application/json'}), paymentController.handleWebhook);


module.exports = router;