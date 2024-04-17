import React from 'react'
import TeamComponent from '@/(routes)/team/page'
import HomeComponent from '@/(routes)/home/page'
import AboutComponent from '@/(routes)/about/page'
import ReviewComponent from '@/(routes)/review/page'
import ServiceComponent from '@/(routes)/service/page'
import ContactComponent from '@/(routes)/contact/page'
import Navbar from '../layout/Nav'


const LandingPage = () => {
  return (
    <div className='relative'>
      <HomeComponent />
      <ServiceComponent />
      <AboutComponent />
      <TeamComponent />
      <ReviewComponent />
      <ContactComponent />
    </div>
  )
}

export default LandingPage
