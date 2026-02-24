import './cartitems.css'
import React, { useContext, useState  } from 'react'
import cart_cross_icon from '../Assets/cart_cross_icon.png'
import { ShopContext } from '../../context/ShopContext'
import { useNavigate } from 'react-router-dom'
import cart_empty from '../Assets/cart_empty.png'

const Cartitems = () => {
  const { products, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext)
  const [shippingCost, setShippingCost] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/CheckOut")
  }

    const totalAmount = getTotalCartAmount();

if(totalAmount === 0){
  return(
  <div className="empty-cart-img">
    <img src={cart_empty} alt="Cart is Empty!!" />
  </div>
  );
}
  return (
    
    <div className='cart-items'>
      <div className="cartitem-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
5
      {products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format">
                <img
                  className="carticon-product-icon"
                  src={e.image}
                  alt={e.name}
                />
                <p>{e.name}</p>
                <p>₹{e.new_price}</p>

                <button className='cartitem-quantity'>
                  {cartItems[e.id]}
                </button>

                <p>₹{e.new_price * cartItems[e.id]}</p>

                <img
                  className="cartitems-remove-icon"
                  src={cart_cross_icon}
                  alt="Remove item"
                  onClick={() => removeFromCart(e.id)}
                />
              </div>
              <hr />
            </div>
          )
        }
        return null
      })}
      <div className="cartitem-total">
        <h1>Cart Total</h1>
        <div>
            <div className="cart-item-total-item">
                <p>Subtotal</p>
                <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cartitem-total-item'>
                <div className="cartitem-shipping">
  <h3>Shipping Method</h3>

  <label>
    <input
      type="radio"
      name="shipping"
      checked={shippingCost === 0}
      onChange={() => setShippingCost(0)}
    />
    Free Shipping (₹0)
  </label>

  <label>
    <input
      type="radio"
      name="shipping"
      checked={shippingCost === 100}
      onChange={() => setShippingCost(100)}
    />
    Express Shipping (₹100)
  </label>
</div>
            </div>
            <hr />
            <div className='cartitem-total-item'></div>
                <h3>Total</h3>
                <h3>₹{getTotalCartAmount() + shippingCost}</h3>
            </div>
            <button className='cartitem-checkout-button'onClick={handleSubmit}>Proceed to Checkout</button>
        </div>
        <div className="cartitem-promocode">
            <p>If you have promo code, Enter it here.</p>
            <div className="cartitem-promobox">
                <input type="text" placeholder='Promo Code' />
                <button className='cartitem-apply-button'>Apply</button>
            </div>
        </div>
      </div>
      
  )
}

export default Cartitems
