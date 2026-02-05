import React from 'react'
import './Offer.css'
import modelx from '../Assets/modelx.png'

const Offer = () => {
  return (
    <div className='offers'>
      <div className="offer-left">

      <h1>Exclusive</h1>
      <h1>Offers For You</h1>
      <p>ONLY ON BEST SELLERS PRODUCTS</p>
      <button>Check Now </button>
      </div>
    <div className="offers-right">
      <img src={modelx} alt="offer" />
    </div>
    </div>
  )
}

export default Offer
