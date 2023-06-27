import stripe from "../utils/stripe.cjs";
import catchAsyncError from "../middleware/catchAsyncError.js";

export const stripe_secret_key = process.env.STRIPE_SECRET_KEY;

export const proceedPayment = catchAsyncError(async (req, res, next) => {
    const myPayment = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: "inr",
        metadata: {
          company: "Ekart",
        },
      });
  
      return res
      .status(200)
      .json({ success: true, client_secret: myPayment.client_secret });
});

export const sendStripeApiKey = catchAsyncError(async (req, res, next) => {
    return res.status(200).json({stripeApikey: process.env.STRIPE_API_KEY})
})