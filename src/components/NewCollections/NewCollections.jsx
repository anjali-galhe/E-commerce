import React from 'react'
import './newcollections.css'
// import new_collections from '../Assets/new_collections.js'
import { useShopContext } from '../../context/ShopContext'

import Item from '../Item/Item'
const NewCollections = () => {
  const{products} = useShopContext();
  const collection = products.slice(-4);
  

  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
{collection.map((item,i)=>{
    return <Item 
    key={item.id}
          {...item}
      
    //  key={i}
    //          id={item.id} 
    //          name={item.name}
    //          image={item.image} 
    //          new_price={item.new_price}
    //           old_price={item.old_price}
     />
})}
        </div>
      
    </div>
  )
}


export default NewCollections
