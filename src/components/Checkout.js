import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import CardIcon from "../Images/credit-card.svg";
import ProductImage from "../Images/card_pic.png";

import "../CSS/Checkout.css"

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51MC7CxSIQ8OHUQZzy030DcD6bkHE9vqmu36vP7SNRHj9qHcMGd4yF8YCXaarjhZBjv2Jm1Rt8i2AkzTc9OogVU4g00UpM6nKGx");
  }

  return stripePromise;
};

const Checkout = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: "price_1MC7YwSIQ8OHUQZzzHLGZK6R",
    quantity: 1
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`
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
      <h1>your booking price</h1>
      <p className="checkout-title">proceed for the checkout</p>
      <p className="checkout-description">
       you have booked a carpenter
      </p>
      <h1 className="checkout-price">$500</h1>
      <img
        className="checkout-product-image"
        src={ProductImage}
        alt="Product"
      />
      <button
        className="checkout-button"
        onClick={redirectToCheckout}
        // disabled={isLoading}
      >
        <div className="grey-circle">
          <div className="purple-circle">
            <img className="icon" src={CardIcon} alt="credit-card-icon" />
          </div>
        </div>
        <div className="text-container">
          <p className="text">{isLoading ? "Loading..." : "Buy"}</p>
        </div>
      </button>
    </div>
  );
};

export default Checkout;