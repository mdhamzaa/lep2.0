import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import CardIcon from "../Images/credit-card.svg";
import ProductImage from "../Images/axiscard.png";

import "../CSS/Checkout.css"

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51MAu9jSHqCPqJqeTeyq2JrGkkj1KBLUI6ZZK2xUlUNoEdZfaVjC3HOPWLr07QJcNqKMQtF8Lz8bZLY5uJWd8Jkev00Msz1z1nu");
  }

  return stripePromise;
};

const Checkout = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: "price_1MCXFfSHqCPqJqeTbkxRMKlp",
    quantity: 1
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `https://lep2.netlify.app/success`,
    cancelUrl: `https://lep2.netlify.app/cancel`
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  return (
    <div className="checkout">
      <div className="CheckoutContainer">
        <h1 className="CardHead">Your Booking Price</h1>
        <p className="checkout-title CardHead">Proceed Ror The Checkout Form</p>
        <p className="checkout-description CardHead">
          You Are One Step Away
        </p>
        <h1 className="checkout-price">Rs.600</h1>
        <img
          className="checkout-product-image"
          src={ProductImage}
          alt="Product"
        />
        <button
          className="w-30 mt-6 text-white bg-red-900 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center "
          onClick={redirectToCheckout}
        // disabled={isLoading}
        >


          {/* <div className="grey-circle">
            <div className="purple-circle">
              <img className="icon" src={CardIcon} alt="credit-card-icon" />
            </div>
          </div> */}
          <div className="text-container">
            <p className="text">{isLoading ? "Loading..." : "Book Now"}</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Checkout;
