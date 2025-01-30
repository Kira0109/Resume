import React from 'react'
import './Nav.css'
import { BsChatLeftTextFill } from "react-icons/bs";
import {Link} from 'react-scroll'
const Nav = () => {
  return (
    <nav className="nav">
      <p className='log'>Khalil <span>Cheguenni</span></p>
        <div className="desktopMenu">

            <Link activeClass="active" 
      to="home" 
      spy={true} 
      smooth={true} 
      offset={0} 
      duration={500} className="desktopListItem">Home</Link>
            <Link className="desktopListItem"
            to="service" 
            spy={true} 
            smooth={true} 
            offset={0} 
            duration={500}>Services</Link>
            <Link className="desktopListItem"
            to="education" 
            spy={true} 
            smooth={true} 
            offset={0} 
            duration={500}
            >Education</Link>
            <Link className="desktopListItem"
            to="projects" 
            spy={true} 
            smooth={true} 
            offset={0} 
            duration={500}>Projects</Link>

        </div>
        <button className="desktopBtn">
        <BsChatLeftTextFill />
        <Link 
            to="contact" 
            spy={true} 
            smooth={true} 
            offset={0} 
            duration={500}>
              Contact Me!
            </Link>
            
        </button>
    </nav>
  )
}

export default Nav
