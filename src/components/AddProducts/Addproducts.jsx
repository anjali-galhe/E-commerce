import React, { useState } from 'react'
import { useShopContext } from '../../context/ShopContext'
import './Addproduct.css'


const AddProducts = () => {

  const {addProducts}= useShopContext();

  const[data,setData]=useState
  ({
    id:"",
    name:"",
    image:"",
    category:"",
    new_price:"",
    old_price:""
  })
  const handleChange = (e) => {
    const{ name, value,files} = e.target;

    if(name ==="image"){
      setData({
        ...data,
        image: files[0]
      })
    }else{
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      ...data,
      id: Number(data.id),
      new_price: Number(data.new_price),
      old_price:Number(data.old_price)
    };
  
    addProducts(newProduct);

   setData({
      id: "",
      name: "",
      image: "",
      category:"",
      new_price: "",
      old_price:"",
      category: ""
    });
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
<div className="product-id">
  <input
   type="number"
   placeholder='Product Id..'
  name='id'

  value={data.id} 
  onChange={handleChange}
  required />

</div>
 <div className="product-name">
  <input
   type="text"
   placeholder='Product Name..'
   name='name'
   value={data.name}
   onChange={handleChange}
   required
   />

 </div>
 <div className="product-category">
  <input type="text"
    placeholder=' Product Category..'
    name='category'
    value={data.category} 
    onChange={handleChange}
    required
    />
 </div>

<div className="product-image">
  <input 
  type="file"
  name='image'
  placeholder='Add Image..'
  // value={data.image}
  onChange={handleChange}
  required
   />

</div>
<div className="product-new-price">
  <input 
  type="number"
  name='new_price'
  placeholder='Current Price' 
  value={data.new_price}
  onChange={handleChange}
  required
  />
  
</div>
<div className="product-old-price">
  <input type="number"
  placeholder='Old Price'
  name='old_price'
  onChange={handleChange}
  value={data.old_price}
  required
   />

</div>
<button type='submit'>Add Product</button>
      </form>
    </div>
  )
}

export default AddProducts
