import express from "express";
import { isAuthenticatedUser } from "../middleware/auth.js";
import { proceedPayment, sendStripeApiKey } from "../controllers/paymentController.js";

const router = express.Router();

router.route("/payment/process").post(proceedPayment);
router.route('/stripeapikey').get(sendStripeApiKey)

export default router;
