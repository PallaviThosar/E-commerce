import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal.js'
import ad from './Images/ad.png';
import { useStateValue } from './StateProvider.js';
import CheckoutProduct from './CheckoutProduct.js';
function Checkout() {
  const [{ basket }, dispatch] = useStateValue
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__ad' src={ad}/>
            <h2 className='checkout__title'>Your Shopping Cart</h2>

            {[1,1,1].map((item) => (
               <CheckoutProduct
            /* id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}*/
              />
             ) )}

        </div>
        <div className='checkout__right'>
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout