import React from 'react'
import serviceData from '@/app/components/data/serviceData'
import Image from 'next/image'
import icon from "@/app/assets/imgs/Icon.svg"
import { FaStethoscope } from "react-icons/fa6";

const ServiceComponent = () => {
  return (
    <section id='service'>
      <div className='page'>
        <h2 className='text-center'>Our Service</h2>
        <p>Embark on a Health Journey Guided by KarePal, <br />
          Your AI Medical Companion</p>
      </div>
      <section className='grid--layout'>
        {serviceData.map((data, i) => {
          return (
            <article key={i} className='grid--layout__item'>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"20px" }}>
                <FaStethoscope style={{ fontSize: "35px" }} />
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
