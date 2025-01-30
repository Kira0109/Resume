import React from 'react'
import './Skills.css'
import uiuxdesign from '../../assets/design.png'
import webdesign from '../../assets/web.png'
import mobiledev from '../../assets/mobile.png'

const Skills = () => {
  return (
    <section className="skills" id='service'>
        <span className="title">What I do</span><br/>
        <span className="desc">I'am an experienced web developer with a passion for crafting visually stunning, user-friendly websites. Skilled in modern design principles and front-end development technologies, I create engaging online experiences that deliver results. </span>
        <div className="bars">
            <div className="bar">
                <img src={uiuxdesign} alt='uiux' className="barimg" />
                <div className="bartext">
                    <h2>UI/UX Design</h2>
                    <p>Dedicated UI/UX designer focused on delivering exceptional user-centered digital solutions. My expertise includes conducting research, creating wireframes and prototypes, and designing interfaces that delight users while meeting business objectives.</p>
                </div>
            </div>
            <div className="bar">
                <img src={webdesign} alt='web' className="barimg" />
                <div className="bartext">
                    <h2>Web Development</h2>
                    <p>Versatile web developer with extensive experience building responsive, high-performance websites using HTML5, CSS3, JavaScript, and popular frameworks such as React and Angular. Passionate about writing clean code, optimizing site performance, and ensuring cross-browser compatibility.</p>
                </div>
            </div>
            <div className="bar">
                <img src={mobiledev} alt='mobile' className="barimg" />
                <div className="bartext">
                    <h2>Mobile Development</h2>
                    <p>Skilled mobile app developer proficient in both iOS (Swift, Objective-C) and Android (Java, Kotlin). Focused on delivering customized, user-friendly apps with smooth functionality and excellent performance.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
