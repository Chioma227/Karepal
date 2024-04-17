import React from 'react'

const ContactComponent = () => {
  return (
    <section id='contact' className='bg-[#001727]'>
      <div className='contact--text'>
        <p>Newsletter</p>
        <h1> JOIN US</h1>
        <p>KarePal: Your AI medical companion, empowering informed <br /> health decisions.</p>
      </div>
      <div className='relative'>
        <input type="text" placeholder='Your Email'/>
        <button className='newsletter-btn'>
          Subscribe
        </button>
      </div>
    </section>
  )
}

export default ContactComponent
