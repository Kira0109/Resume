import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <h2 className='heading'>Contact</h2>
      <form action=''>
        <div className='grp'>
          <div className='box'>
            <input type='text' placeholder='Full Name'></input>
            <input type='email' placeholder='Email'></input>
          </div>
          <div className='box'>
          <input type='number' placeholder='Phone Number'></input>
          <input type='text' placeholder='Subject'></input>
          </div>
        </div>
        <div className='grp2'>
          <textarea id='' cols='30' rows='10' placeholder='Send Your Message'></textarea>
          <input type='submit' placeholder='Send ' className='btn'></input>
        </div>
      </form>
    </div>
  )
}

export default Contact
