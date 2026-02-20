import { ShopContext } from "../../context/ShopContext";
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import "./Checkout.css";


const CheckOut = () => {



  



const { getTotalCartAmount, products, cartItems } =
  useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

      const [address, setAddress] = useState(null);
       const [formVisible, setFormVisible] = useState(false);
    

       const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });


  useEffect(() => {
    const savedAddress = localStorage.getItem("user-address");
    if (savedAddress) {
      setAddress(JSON.parse(savedAddress));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddress(formData);
    localStorage.setItem("user-address", JSON.stringify(formData));

    setFormVisible(false);
  }

 const handlePlaceorder = () => {
  if (!address) {
    alert("Enter Address first");
    return;
  }

  const orderId = Date.now();

  const orderDetails = {
    id: orderId,
    address,
    products: orderedProducts,   // 👈 add this
    totalAmount,
    deliveryType: "Today Delivery",
    orderDate: new Date().toISOString(),
    status: "Order Placed",
    tracking: [
      "Order Placed",
      "Packed",
      "Out for Delivery",
      "Delivered",
    ],
  };

  const existingOrders =
    JSON.parse(localStorage.getItem("customer-orders")) || [];

  localStorage.setItem(
    "customer-orders",
    JSON.stringify([...existingOrders, orderDetails])
  );

  navigate("/payment", { state: { address, totalAmount, orderId } });
};


  
  const orderedProducts = products.filter(
  (p) => cartItems[p.id] > 0
).map((p) => ({
  id: p.id,
  name: p.name,
  image: p.image,
  price: p.new_price,
  quantity: cartItems[p.id],
}));



    return (
        <>
        <div className="checkout-container">
         <h2 className="checkout-heading">
            Checkout
         </h2>

<div className="checkout-section">
    <div className="checkout-left-section">
        {!address && !formVisible &&(

        <button

        onClick={()=>{setFormVisible(true)}}
        className="add-address-btn">
            
        +Add Address
        
        </button>
    )}
    {formVisible && (
    <form onSubmit={handleSubmit} className="address-form">
        <input 
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
        />

        <input type="text"
        name="phone"
        placeholder="Mobile no." 
        value={formData.phone}
        onChange={handleChange}
        required
        />

        <input type="text"
        name="address"
        placeholder="Full Address"
        value={formData.address}
        onChange={handleChange}
        required />

        <input type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        required
         />

         <input type="number"
         name="pincode"
         placeholder="Pincode"
         value={formData.pincode}
         onChange={handleChange} 
         />

         <button>Save Address</button>


    </form>
    )}
    </div>

    <div className="checkout-right-section">
          {address ? (
            
      <div className="save-address-box">

        <h3>delivery Address</h3>
        
        <p><b>Name:</b> {address.name}</p>
        <p><b>Phone:</b> {address.phone}</p>
        <p><b>Address:</b> {address.address}</p>
        <p><b>City:</b> {address.city}</p>
        <p><b>Pincode:</b> {address.pincode}</p>

<button 
className="edit-addres-btn"
onClick={()=>{
  setFormData(address);
  setFormVisible(true);
}}>
  Change Address
</button>

 <div className="order-box">
  <p className="order-total">
   Total Amount: <span>${totalAmount}</span>
  </p>
  <button className="place-order-btn"
  onClick={handlePlaceorder}>
    Place Order
  </button>
 </div>
      </div>
      ) :(
        <p className="no-address-text">No address saved yet</p>
      )}
</div>
</div>
</div>
        
        
        </>
    )
}

export default CheckOut