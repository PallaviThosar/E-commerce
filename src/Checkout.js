import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal.js'
import ad from './Images/ad.png';
function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__ad' src={ad}/>
            <h2 className='checkout__title'>Your Shopping Cart</h2>

        </div>
        <div className='checkout__right'>
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout