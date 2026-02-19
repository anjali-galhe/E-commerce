import React from "react";
import all_product from "../Assets/all_product";
import "./Viewproduct.css";

const Viewproducts = () => {
  const products = all_product;

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
                <img
                  src={product.image}
                  alt={product.name}
                  className="table-image"
                />
              </td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>₹{product.new_price}</td>
              <td>₹{product.old_price}</td>
              <td>
                <button className="edit-btn">Edit</button>
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
