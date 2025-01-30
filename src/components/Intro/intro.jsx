import React from 'react'
import './intro.css'
import { Link } from 'react-scroll'
import { MdWork } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import pdp2 from '../../assets/pdp2.jpg'
import { MdContacts } from "react-icons/md";



const Intro = () => {
  return (
    <section className="intro" id='home'>
       <div className="cantent">
        <span className="wlcm">Welcome,</span>
        <span className="text"> It's <span className="name">Khalil</span><br/><h3 className='txt'>I'am a <span></span></h3></span>
        <p className="para">I'm a skilled web developer with experience in creating visually <br/>and user friendly websites</p>
        <div className='btns'>
        <Link><button className="btn"><MdWork/> Download</button></Link>
        <Link><button className="cnt"><MdContacts/> Contact </button></Link>
        </div>
        <img src={pdp2} alt=""  className='logo'/>
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
       
    </section>
  )
}

export default Intro
