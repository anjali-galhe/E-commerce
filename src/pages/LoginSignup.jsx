import React from 'react'
import './style/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-filds">
          <input type="text" placeholder=' Your Name' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
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
