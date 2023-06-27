const dotenv = require('dotenv');
// Config
dotenv.config();
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
module.exports = stripe;