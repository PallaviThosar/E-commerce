import React from 'react'
import "./Home.css"
import background from './Images/background1.jpg'
import product1 from './Images/Product1.jpg'

import Product from './Product.js'
function Home() {
  return (
    <div className='home'>
     <div className='home__container'>
      <img className='home__image'
      src={background}/>
      <div className='home__row'>
        {/*Product*/}
        <Product id='1234' title="Titan Karishma Analog Champagne Dial Women's Watch" price={1994} image={product1} rating={5}/>
        <Product id='1235' title="Titan Karishma Analog Champagne Dial Women's Watch" price={1994} image={product1} rating={5}/>
      
      </div>
      <div className='home__row'>
        {/*Product*/}
        <Product id='1236' title="Titan Karishma Analog Champagne Dial Women's Watch" price={1994} image={product1} rating={5}/>
        
        <Product id='1237' title="Titan Karishma Analog Champagne Dial Women's Watch" price={1994} image={product1} rating={5}/>
        
        <Product id='1238' title="Titan Karishma Analog Champagne Dial Women's Watch" price={1994} image={product1} rating={5}/>
        

        
        {/*Product*/}
        {/*Product*/}
      </div>
      <div className='home__row'>
        {/*Product*/}
        <Product id='1239' title="Titan Karishma Analog Champagne Dial Women's Watch" price={1994} image={product1} rating={5}/>
        

      </div>
      </div> 
    </div>
  )
}

export default Home