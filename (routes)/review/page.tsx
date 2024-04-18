"use client"
import reviewCarousel from '@/app/components/data/reviewCarousel'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { AnimatePresence, motion } from 'framer-motion'
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";


const ReviewComponent = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isNextSlide, setIsNextSlide] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false)

    //move to next slide
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % reviewCarousel.length);
    };
    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1) % reviewCarousel.length);

    };
    useEffect(() => {
        if (currentSlide === 0 ) {
            setIsDisabled(true)
        }else{
            setIsDisabled(false)
        }
    }, [currentSlide])
    return (
        <div id='review'>
            <div>
                <h2>Testimonials</h2>
                <p>Stories of Success and Satisfaction</p>
            </div>
            <section className="carousel-sec flex items-center justify-center">
                <button
                    disabled={isDisabled}
                    onClick={prevSlide}
                    className={isDisabled ? "disabled" : "arrow-left"}
                >
                    <FaArrowLeft />
                </button>
                <div className="testimonial">
                    
                    <section className="user-sec">
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { type: "tween", duration: 2 },
                                }}
                                exit={{ opacity: 1 }}
                            >
                                <Image
                                    src={reviewCarousel[currentSlide].img}
                                    alt="user"
                                    width={70}
                                    height={70}
                                />
                            </motion.div>
                            <p className="font-semibold text-xtraSmall">
                                {reviewCarousel[currentSlide].name}
                            </p>
                            <p>{reviewCarousel[currentSlide].role}</p>
                        </AnimatePresence>
                    </section>
                    <section className='user-text'>
                        <div>
                            <BiSolidQuoteAltLeft />
                        </div>
                        <p className="mb-[18px] leading-[30px] ">
                            {reviewCarousel[currentSlide].review}
                        </p>
                        <div>
                            <BiSolidQuoteAltRight />
                        </div>
                    </section>
                </div>
                <button
                    onClick={nextSlide}
                    className="arrow-right"
                >
                    <FaArrowRight />
                </button>
            </section>
        </div>
    )
}

export default ReviewComponent
