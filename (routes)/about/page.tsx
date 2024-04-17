import React from 'react'
import Image from 'next/image'
import aboutImg from "@/app/assets/imgs/aboutImg.svg"

const AboutComponent = () => {
    return (
        <section id='about' className='home bg-[#001727] mt-16 text-white'>
            <section className='about--container'>
                <div className='imgSec'>
                    <Image className='image' src={aboutImg} alt='about' width={100} height={100} />
                </div>
                <div className=' text-sec'>
                <h2>About Us</h2>
                <h4>
                KarePal: Your AI medical companion, empowering informed health decisions.
                </h4>
                    <p>KarePal is your AI-powered health companion.  Confused by medical jargon? KarePal translates it into clear, easy-to-understand information.  Through interactive learning and personalized recommendations, KarePal empowers you to take charge of your health journey. </p>
                    <p className='text-2'>KarePal is your partner in health, empowering you to take control of your <br /> well-being.</p>
                    <button className='discover'>
                        Discover More
                    </button>
                </div>
            </section>
        </section>
    )
}


export default AboutComponent
