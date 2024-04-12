import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal.js'
import ad from './Images/ad.png';
import { useStateValue } from './StateProvider.js';
import CheckoutProduct from './CheckoutProduct.js';
function Checkout() {

  const [{ basket , user}, dispatch] = useStateValue();
 // console.log("User:", user.name);

  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__ad' src={ad}/>
           <div>
            <h3>Hello, {user?.email || 'Guest'}</h3>
             <h2 className='checkout__title'>Your Shopping Cart</h2>
           </div>
            {basket.map((item) => (
               <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
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