
import { ShopContext } from "../../context/shopContext"
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import "./Checkout.css";


const CheckOut = () => {



  



const { getTotalCartAmount, all_product, cartItems } =
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

  const handlePlaceOder = () =>{
   if(!address){
  alert("Enter Adress first")
  return;
   }

   const orderId = Date.now()
   const orderDetails ={
    id: orderId,
    address,
    totalAmount,
    deliveryType:"Today Delivery",
    orderDate: new Date().toISOString(),
    status:"Order placed",

   };

const existingOrders = JSON.parse(localStorage.getItem("customer-orders")) || [];
localStorage.setItem("customer-orders", JSON.stringify([...existingOrders, orderDetails]));

navigate("/payment", { state: { address, totalAmount, orderId } });



  }

  const orderedProducts = all_product.filter(
  (p) => cartItems[p.id] > 0
).map((p) => ({
  id: p.id,
  name: p.name,
  image: p.image,
  price: p.new_price,
  quantity: cartItems[p.id],
}));


const orderDetails = {
  id: orderId,
  address,
  products: orderedProducts,
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
        className="add-adress-btn">
            
        +Add Address
        
        </button>
    )}
    {formVisible && (
    <form onSubmit={handleSubmit} className="adress-form">
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
         <input type="pincode"
         name="pincode"
         placeholder="Pincode"
         value={formData.pincode}
         onChange={handleChange} 
         />

         <button>Save Adress</button>


    </form>
    )}
    </div>

    <div className="checkout-right-section">
          {address ? (
            
      <div className="save-address-box">

        <h3>Delivary Address</h3>
        
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
  onClick={handlePlaceOder}>
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