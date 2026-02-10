import React from 'react'
import './Order.css'
import { useLocation } from 'react-router-dom'

const order = () => {

const location = useLocation();
const {totalAmount,address,paymentMethod ,details,deliveyOption} = location.state || {};

  return (
    <>
    <div className="order-success">
        <h2>Order Successful!!</h2>
    <div className="order-details">
<h3>Order Summary</h3>
<p>Amount Paid: ${totalAmount}</p>
<p>Payment Method : {paymentMethod}</p>
<p>Dilivey Method: {deliveyOption}</p>

    </div>

    <div className="shipping-adress">
<h3>Shipping Address</h3>
{address ?(
     <>
     <p>Name: {address.name}</p>
     <p>Phone:{address.phone}</p>
     <p>Address: {address.address} </p>
     <p>City: {address.city} </p>
     <p>Pincode: {address.pincode} </p>

     </>
):(
<p>No Address Available</p>

)}

    </div>
        </div>


</>
  );
};

export default order
