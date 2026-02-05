import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h1>Get exclusive Offers On Your E-mail </h1>
      <p>Subscribe to our newsletter and stay updated with the latest offers and products.</p>
      <div><input type="email" placeholder=" Your email Id" /></div>
      <button>Subscribe</button>
    </div>
  )
}

export default Newsletter
