import React from 'react'
import './Footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-scroll'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='logoet'>
          <Link onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.facebook.com/mohamedkhalil.cheguenni/';
      }}  className='logos'><FaFacebookSquare/></Link>
          <Link onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.instagram.com/khalil_cheguenni/';
      }} to='' className='logos'><FaSquareInstagram/></Link>
          <Link to='' className='logos'><FaLinkedin/></Link>
          <Link to='' className='logos'><FaXTwitter/></Link>
        
       </div>
    </div>
  )
}

export default Footer
