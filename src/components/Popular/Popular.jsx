import React from 'react'
import './popular.css'
// import data_product from '../Assets/data'
import { useShopContext } from "../../context/ShopContext";
import Item from '../Item/Item'
const Popular = () => {

  const { products} = useShopContext();
  const womenproduct = products
  .filter((item) => item.category === "women")
  .slice(0,3);

  const menproduct = products
  .filter((item) => item.category ==="men" )
  .slice(0,3);
  
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {womenproduct.reverse().map((item,i)=>{
            return <Item 
            key={i}
             id={item.id} 
             name={item.name}
             image={item.image} 
             new_price={item.new_price}
              old_price={item.old_price} />}
        )}
      </div>

{/* <div className="men"> */}
      <h1>POPULAR IN MEN</h1>
      <hr />
      <div className="popular-item">
        {menproduct.reverse().map((item,i)=>{
            return <Item 
            key={i}
             id={item.id} 
             name={item.name}
             image={item.image} 
             new_price={item.new_price}
              old_price={item.old_price} />}
        )}
      {/* </div> */}

      </div>
    </div>
  )
}

export default Popular
