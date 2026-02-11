import React from 'react'
import './style/LoginSignup.css'
import { useState } from 'react'
const LoginSignup = () => {
  
  const[issignup , setSignup] = useState(false);

  

  

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-filds">
          <input type="text" placeholer=' Your Name' value={fields.name} 
          onChange={(e)=> e.target.value}
          required />
          <input type="email" placeholdder='Email' value={fields.email}required />
          <input type="password" placeholder='Password' value={fields.password} required/>
          <div className="loginsignupagree">
            <input type="checkbox" name= '' id='' />
       <p>by continuing , i agree to the terms of service and privacy policy</p>
          </div>
        </div>
          <button>Continue..</button>
          <p className='loginsignup-login'
          >
            Already have an Account? <span>Login</span>
          </p>
      </div>
        </div>
    
  )
}

export default LoginSignup
