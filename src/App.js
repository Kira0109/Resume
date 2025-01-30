import React from 'react'
import Nav from './components/Nav/Nav'
import Intro from './components/Intro/intro'
import Skills from './components/Skills/Skills'
import Time from './components/Time/Time';
import Code from './components/Code/Code';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter 
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter >
    <div>
      <Nav/>
      <Intro/>
      <Skills/>
      <Time/>
      <Code/>
      <Contact/>
      <Footer/>
    </div> 
    </BrowserRouter>
  )
}

export default App
