import React from 'react'
import Breadcrums from '../components/Breadcrums/Breadcrums';
import { useParams } from "react-router-dom";
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import Description from '../components/Description/Description';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';
function Product() {
  //  const { all_product } = useContext(ShopContext);
  const {products} = useContext(ShopContext)
  const { productId } = useParams();

  if (!products || products.length === 0) {
    return <h2>Loading...</h2>;
  }


  const product = products.find(
    (e) => e.id === Number(productId)
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }
  
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
      <RelatedProducts category={product.category}/>
    </div>
  )
}

export default Product
