import React from 'react'
import Image from 'next/image'
import heroImg from "@/app/assets/imgs/heroImg.svg"

const HomeComponent = () => {
  return (
    <section id='home' className='home bg-[#001727] mt-16 text-white'>
      <div className='hero--items_container'>
        <section className='' style={{width:"30%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique in enim maxime iste a molestiae, animi non. Qui, dicta possimus?</section>
        <section>
          <Image src={heroImg} alt='hero' width={700} height={300} style={{alignSelf: "flex-end"}} />
        </section>
      </div>
    </section>
  )
}

export default HomeComponent
