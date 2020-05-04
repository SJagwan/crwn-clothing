import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton=({price})=>{
    const priceforstripe=price*100;

    const publishableKey='pk_test_Y5T31UbVEJEcFs6JsfHIUkFn003HWrHYLJ';
   const onToken=(token)=>{
        console.log(token)
        alert('payment successful');
    }

    return(
        <StripeCheckout
        label='Pay Now'
        name='Crwn Clothing'
        billingAddress
        shippingAddress
        // image='https://svgshare.com/i/CUz.svg'
        currency="INR"
        description={`Your total is Rs ${price}`}
        amount={priceforstripe}
        panelLabel="PayNow"
        token={onToken}
        stripeKey={publishableKey}
        
        />

    )
}
export default StripeCheckoutButton;