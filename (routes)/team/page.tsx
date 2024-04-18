import teamData from '@/app/components/data/teamData'
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import Image from 'next/image'
import Link from 'next/link';


const TeamComponent = () => {
    return (
        <div id='team' className='pb-[20%]'>
            <div className='team--text'>
                <h2>Our Team</h2>
                <h3>Meet the Brilliant Minds:</h3>
                <p>Empower yourself with KarePal, your AI healthcare guide! Join millions on a <br /> journey to better health through interactive learning and personalized insights.</p>
            </div>
            <section className='team--grid'>
                {teamData.map((data, i) => {
                    return (
                        <div key={i} className='item'>
                            <div>
                                <Image src={data.img} alt='user' width={90} height={90} />
                            </div>
                            <h1>{data.name}</h1>
                            <h2>{data.profession}</h2>
                            <p>{data.description}</p>
                            <Link href="/">
                                <FaLinkedin style={{fontSize:"25px", marginTop:"20px" }} />
                            </Link>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default TeamComponent
