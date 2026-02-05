

import React from 'react'
import './hero.css'
import model from '../Assets/model.png'

function Hero() {
  return (
     <div>
       <div className="hero">
         <div className="heading">
         <p>Get up to 30% Off</p>
         <p>New Arrivals</p>
         <button>Shop Now</button>
         </div>

         
              <div className='main-i'>
                <img src={model} alt="hi" />

              </div>
            

       </div>
   </div>
  )
}

export default Hero

