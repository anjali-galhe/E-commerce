
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {  Navigate, Route, Routes } from 'react-router-dom'
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
import Profile from './components/Profile/Profile'

import Admin from "./components/Admin/Admin"
import AdminLayout from './components/Admin/AdminLayout'
import AdminDashboard from './components/Admin/AdminDashboard'
import Addproducts from './components/AddProducts/Addproducts'
import ViewOrders from './components/ViewOrders/ViewOrders'
import { useShopContext } from './context/ShopContext'
import Viewproducts from './components/Viewproducts/Viewproducts'
import { useLocation } from 'react-router-dom'


function App() {
  const { role } = useShopContext();

  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");


  

  return (
<>
      {!isAdminRoute && <Navbar />}

   
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
        <Route path="/profile" element={<Profile/>}/>
        {/* <Route path="/admin" element={<Admin/>}/> */}

    </Routes>
        </main>
        {/* --- Admin --- */}
    <Routes>
        <Route
          path="/admin"
          element={role === "admin" ? <AdminLayout /> : <Navigate to="/"/>}
        >
          <Route index element={<AdminDashboard />} />
          <Route path="add-product" element={<Addproducts />} />
          <Route path="view-orders" element={<ViewOrders />} />
          <Route path='product-list' element={<Viewproducts/>}/>
        
        </Route>

        <Route path="*" element={<h2>Page Not Found</h2>} />

      </Routes>
      {!isAdminRoute && <Footer />}

        </>
        
      )
        
      
    }
    
export default App
