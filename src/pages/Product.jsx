import React from 'react'
import Breadcrums from '../components/Breadcrums/Breadcrums';
import { useParams } from "react-router-dom";
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import Description from '../components/Description/Description';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';
function Product() {
   const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_product.find(
    (e) => e.id === Number(productId)
  );
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
