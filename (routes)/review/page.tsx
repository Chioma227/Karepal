"use client"
import reviewCarousel from '@/app/components/data/reviewCarousel'
import React, { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

const ReviewComponent = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isNextSlide, setIsNextSlide] = useState(false);

    //move to next slide
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % reviewCarousel.length);
    };
    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1) % reviewCarousel.length);
    };
    return (
        <div id='review'>
            <section className="carousel-sec flex items-center justify-center">
                <button
                    onClick={prevSlide}
                    className="text-gray-900 bg-white font-extrabold rounded-[50%] bg-blackSecondary w-[35px] h-[35px] border-none"
                >
                    &lt;
                </button>
                <div className="flex items-center justify-center">
                    <section className="mb-[18px] flex-1">
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
                                    className="rounded-full"
                                />
                            </motion.div>
                            <p className="font-semibold text-xtraSmall">
                                {reviewCarousel[currentSlide].name}
                            </p>
                            <p>{reviewCarousel[currentSlide].role}</p>
                        </AnimatePresence>
                    </section>
                    <section className='flex-1 w-[50%]'>
                        <p className="mb-[18px] leading-[30px] ">
                            {reviewCarousel[currentSlide].review}
                        </p>
                    </section>
                </div>
                <button
                    onClick={nextSlide}
                    className="text-gray-900 bg-white ml-[7px]  font-extrabold rounded-[50%] bg-blackSecondary w-[35px] h-[35px] border-none"
                >
                    &gt;
                </button>
            </section>
        </div>
    )
}

export default ReviewComponent
