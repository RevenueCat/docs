const stripe = require('stripe')('your_stripe_secret_key');

const app_user_id = 'user_id';

const session = await stripe.checkout.sessions.create({
  success_url: 'https://example.com/success',
  line_items: [
    {
      price: 'price_1MotwRLkdIwHu7ixYcPLm5uZ',
      quantity: 1,
    },
  ],
  mode: 'subscription',
  metadata: {
    app_user_id: `${app_user_id}`,
  },
  subscription_data: {
    metadata: {
      app_user_id: `${app_user_id}`,
    },
  },
});