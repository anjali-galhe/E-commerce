
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {  Route, Routes } from 'react-router-dom'
import ShopCato from './pages/ShopCato'
import LoginSignup from './pages/LoginSignup'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Footer from './components/Footer/Footer'
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kids_banner from './components/Assets/banner_kids.png'
import CheckOut from './components/Cartitems/CheckOut'
import Payment from './components/Cartitems/Payment'
import Order from './components/Cartitems/order'
import MyOrders from './components/MyOrder/MyOrder'

function App() {
  

  return (
  
  <>
  <header>
  <Navbar/>
  </header>
    <main className="page-content">

  <Routes>
    <Route path='/' element={<Shop/>} />
        <Route path='/mens' element={<ShopCato banner ={men_banner}category="men"/>} />
        <Route path='/womens' element={<ShopCato banner ={women_banner}category="women"/>} />
        <Route path='/kids' element={<ShopCato  banner ={kids_banner}category="kid"/>} />
  
<Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<LoginSignup/>} />

        <Route path='/checkout' element={<CheckOut/>}/>

        <Route path='/payment' element={<Payment/>}/>
        <Route path='/order' element={<Order/>}/>

        <Route path="/orders" element={<MyOrders />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />



</Routes>
</main>
<Footer/>
  </>


  )
}

export default App
