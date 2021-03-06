import React from 'react';

export default function CheckoutSteps(props) {
  return (
    <div className="container checkout-steps">
      <div className={props.step1 ? 'active' : ''}>Shipping</div>
      <div className={props.step2 ? 'active' : ''}>Payment</div>
      <div className={props.step3 ? 'active' : ''}>Order</div>
    </div>
  );
}
