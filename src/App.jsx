
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
        <Route path='/product' element={<Product/>} />
  
<Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='login' element={<LoginSignup/>} />

  </Routes>
  <Footer/>
</main>
  </>


  )
}

export default App
