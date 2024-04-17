import React from 'react'
import serviceData from '@/app/components/data/serviceData'
import Image from 'next/image'

const ServiceComponent = () => {
  return (
    <section id='service' className=' mt-16'>
      <div className='page'>
        <h2 className='text-center'>Our Service</h2>
        <p>Embark on a Health Journey Guided by KarePal, <br />
         Your AI Medical Companion</p>
      </div>
      <section className='grid--layout'>
        {serviceData.map((data, i) => {
          return (
            <article key={i} className='grid--layout__item'>
              <div>
                <Image src={data.icon} alt='icon' width={30} height={30} />
              </div>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
            </article>
          )
        })}
      </section>
    </section>
  )
}

export default ServiceComponent
