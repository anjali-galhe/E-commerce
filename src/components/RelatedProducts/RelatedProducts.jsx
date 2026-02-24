import React from 'react'
import './RelatedProducts.css'
// import data_product from '../Assets/data'
import { useShopContext } from '../../context/ShopContext'
import Item from '../Item/Item'

const RelatedProducts = ({category = 'women'}) => {

  const {products} = useShopContext();
  const productcat = products
    .filter((item) => item.category === category)

  return (
    <div className='related-products'>
      <h1>Related Products</h1>
    <hr />
    <div className="relatedproducts-item">
    {productcat.map((item,i)=>{
        return <Item key={i}
             id={item.id} 
             name={item.name}
             image={item.image} 
             new_price={item.new_price}
              old_price={item.old_price}/>
    })}
    </div>
    </div>
  )
}

export default RelatedProducts
