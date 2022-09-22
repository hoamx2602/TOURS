/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe('pk_test_51LkpuQHNAz9iTIIiWPfgcZ9NYuhVELY5nLR5gguNYH7KA3VTKLu18kaMlDd3SAwRlwUVvkaFvvLiJhfY3gF2BIdM00Uo5iFeot');

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
