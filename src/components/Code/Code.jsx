import React from 'react'
import './Code.css'
import one from '../../assets/11.png'
import two from '../../assets/22.png'
import four from '../../assets/4.png'
import five from '../../assets/5.png'
import six from '../../assets/6.png'
import seven from '../../assets/7.png'
import eight from '../../assets/8.png'
import night from '../../assets/9.png'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";        

import Slider from "react-slick";

const Code = () => {
  var settings = {
 
  };

  
 
  return (
    
   
    <div className='skill ' id="projects">
        <h2 className='heading'>Projects</h2>
        
        
          <div className='barrs '>

          
          <div className='barr '>
          <img src={one} alt='' className="img" />
          </div>

          <div className='barr'>
          <img src={two} alt='' className="img" />
          </div>


          <div className='barr'>
          <img src={four} alt='' className="img" />
          </div>

          <div className='barr'>
          <img src={five} alt='' className="img" />
          </div>

          <div className='barr'>
          <img src={six} alt='' className="img" />
          </div>

          <div className='barr'>
          <img src={seven} alt='' className="img" />
          </div>

          <div className='barr'>
          <img src={eight} alt='' className="img" />
          </div>

          <div className='barr'>
          <img src={night} alt='' className="img" />
          
          </div>
          
    </div>
    

    </div>
   
   
  )
}

export default Code

