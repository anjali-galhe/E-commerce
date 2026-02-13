import React from 'react'
import './style/LoginSignup.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const LoginSignup = () => {
  
const [formdata, setFormdata] = useState ({
name:"",
email:"",
password:""
})

const [isLogin , setIsLogin] = useState(true)

const[userdata, setUserdata] = useState(null)

useEffect(() => {
const users = localStorage.getItem("users");
if(users){
  setUserdata(JSON.parse(users))
}                                    

},[]);


const handleChange =(e) =>{
setFormdata({
...formdata,
[e.target.name] : e.target.value

})

};


const navigate = useNavigate();
const handleSubmit = (e) => {
  e.preventDefault();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (isLogin) {
    // LOGIN LOGIC
    const existingUser = users.find(
      (user) =>
        user.email === formdata.email &&
        user.password === formdata.password
    );

    if (existingUser) {
      alert("Login Successful ");
     localStorage.setItem("isLoggedIn", "true");

       localStorage.setItem("currentUser", JSON.stringify(existingUser));

      navigate("/");
    } else {
      alert("Invalid Email or Password ");
    }

  } else {
    // SIGNUP LOGIC
    const userExists = users.find(
      (user) => user.email === formdata.email
    );

    if (userExists) {
      alert("User already exists");

      return;
    }

    users.push(formdata);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup Successful ");
    setIsLogin(true);
    // localStorage.removeItem("isLogin");


  }
};


  return (
    <div className='loginsignup'>
      
      <div className="loginsignup-container">

       <h1>{isLogin ? "Login" : "Sign Up"}</h1>

        <div className="loginsignup-filds">
          {!isLogin &&(
          <input 
          type="text"
           placeholder=' Your Name' 
           value={formdata.name} 
           name='name'
           onChange={handleChange}
          required
           />)
          }
          <input
           type="email" 
           placeholder='Email' 
           value={formdata.email}
            onChange={handleChange}
            name='email'
            required
             />
          <input 
          type="password" 
          placeholder='Password'
           value={formdata.password}  
           onChange={handleChange} 
           name='password'
           required/>
           
          <div className="loginsignupagree">
            <input type="checkbox" />
       <p>by continuing , i agree to the terms of service and privacy policy</p>
          </div>
        </div>
          <button onClick={handleSubmit}>Continue..</button>
          <p>
  {isLogin ? "Don't have an account?" : "Already have an account?"}
  <span
    style={{ cursor: "pointer", color: "blue" }}
    onClick={() => setIsLogin(!isLogin)}
  >
    {isLogin ? " Sign Up" : " Login"}
  </span>
</p>

      </div>
        </div>
    
  )
}

export default LoginSignup
