import React, { useEffect, useState } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link , useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';

function Payment() {
  const [{ basket, user}, dispatch] = useStateValue();
  const navigate = useNavigate();


  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

 useEffect(() =>{
  
  const getClientSecret = async () => {
    try {
        const response = await axios.post('/payments/create', {
            // Stripe expects the total in currency subunits
            total: getBasketTotal(basket) * 100
        });
        setClientSecret(response.data.clientSecret);
    } catch (error) {
        // Handle errors
        if (error.response) {
            // Request was made and server responded with a status code outside 2xx range
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // Request was made but no response was received
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an error
            console.log('Error', error.message);
        }
    }
};

    
   getClientSecret();
  }, [basket])
console.log('THE SECRET IS >>>>',clientSecret)

  const handleSubmit = async (event) => {
   event.preventDefault();
   setProcessing(true);

   const payload = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: elements.getElement(CardElement)
    }
  }).then(({ paymentIntent}) => {
    setSucceeded(true);
    setError(null)
    setProcessing(false)

    dispatch({
      type: 'EMPTY_BASKET'
  })

    navigate('/orders', { replace: true });
  })
  }

 const handleChange = event => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
 }

  return (
    <div className='payment'>
      <div className='payment__container'>
         <h1>
          Checkout (<Link to={'./checkout'}> {basket?.length} items </Link>)
         </h1>
        
         <div className='payment__section'>
            <div className='payment__title'>
                <h3>Delivary Address</h3>
            </div>
            <div className='payment__address'>
              <p>{user?.email} </p>
              <p>13 reactlane</p>
              <p>majalgaon</p>
            </div>
         </div>

         <div className='payment__section'>
         <div className='payment__title'>
                <h3>Review Items And Delivary</h3>
            </div>
            <div className='payment__items'>
            {basket.map(item => (
              <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              />
             ))}

            </div>
         </div>

         <div className='payment__section'>
             <div className='payment__title'>
              <h3>Payment Mothod</h3>
             </div>
             <div className='payment__details'>
             <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange}/>

                                <div className='payment__priceContainer'>
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"₹"}
        
                                    />
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                    </button>
                                </div>

                                  {/* Errors */}
                                {error && <div>{error}</div>}
                            </form>

             </div>
         </div>

         </div>
    </div>
  )
}

export default Payment

