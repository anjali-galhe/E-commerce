import React from "react";
// import all_product from "../Assets/all_product";
import "./Viewproduct.css";
import { useShopContext } from "../../context/ShopContext";

const Viewproducts = () => {
  // const products = all_product;

const { products, deleteProduct } = useShopContext();

// localStorage.clear()





  return (
    <div className="viewproducts-container">
      <h2>All Products</h2>

      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>New Price</th>
            <th>Old Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
           <td>
  {Array.isArray(product.image) && product.image.length > 0 ? (
    <img
      src={product.image[0]}
      alt="product"
      style={{ width: "60px", height: "60px", objectFit: "cover" }}
    />
  ) : typeof product.image === "string" && product.image !== "" ? (
    <img
      src={product.image}
      alt="product"
      style={{ width: "60px", height: "60px", objectFit: "cover" }}
    />
  ) : (
    "No Image"
  )}
</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>₹{product.new_price}</td>
              <td>₹{product.old_price}</td>
              <td>
                <button className="edit-btn" >Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Viewproducts;
