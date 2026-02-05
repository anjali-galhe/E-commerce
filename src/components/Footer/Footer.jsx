import React from 'react'
import './footer.css'
import logo from '../Assets/logo2.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logo} alt="Logo" />
        <p>LUVIA</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-socials-icon">
        <div className="footer-icon-container">
            <img src={instagram_icon} alt="instagram-icon" />
            <img src={pintester_icon} alt="pinterest-icon" />
            <img src={whatsapp_icon} alt="whatsapp-icon" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p> Copyright @ 2026 LUVIA - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
