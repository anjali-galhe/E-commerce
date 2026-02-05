import React from 'react'
import './breadcrums.css' 
import breadcrum_arrow from '../Assets/breadcrum_arrow.png'

const Breadcrums = (props) => {
    const {product} = props;
  return (
    <div className='breadcrums'>
      HOME <img src={breadcrum_arrow} alt="arrow_icon" />
       SHOP <img src={breadcrum_arrow} alt="arrow_icon" />
        {product.category} <img src={breadcrum_arrow} alt="arrow_icon" />
         {product.name}
      
    </div>
  )
}

export default Breadcrums
