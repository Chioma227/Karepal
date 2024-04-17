import React from 'react'
import Image from 'next/image'
import heroImg from "@/app/assets/imgs/heroImg.svg"

const HomeComponent = () => {
  return (
    <section id='home' className='home bg-[#001727] mt-16 text-white'>
      <div className='hero--items_container'>
        <section className='hero-text' >
          <h2>
            Transforming care giving through data-driven AI tools
          </h2>
          <p>Karepal's AI-powered care giving services provides numerous benefits to both caregivers and care recipients.</p>
          <section className='home--stat'>
              <div className='stat-one'>
                <p>50k</p>
                <p>Happy Customers</p>
              </div>
              <div className='stat-two'>
                <span>100k</span>
                <p>Monthly Visitors</p>
              </div>
              <div className='stat-three'>
                <p>10</p>
                <p>Countries Worldwide</p>
              </div>
          </section>
          <div></div>
        </section>
        <section className='hero-imgSec'>
          <Image src={heroImg} alt='hero' width={700} height={300} style={{ alignSelf: "flex-end" }} />
        </section>
      </div>
    </section>
  )
}

export default HomeComponent
