"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from "@/app/assets/imgs/logo.svg"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white transition-all fixed top-0 start-0 w-full z-10">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-around h-16">
                    <div>
                        <Image src={logo} alt='logo' width={100} height={100} />
                    </div>
                    <div className="md:flex hidden md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className="text-black bg-transparent border-[#2937B6] border font-medium rounded-lg text-sm px-4 py-2 text-center mr-[20px]">Sign in</button>
                        <button type="button" className="text-white bg-[#2937B6] font-medium rounded-lg text-sm px-4 py-2 text-center ">Sign up</button>
                    </div>
                    <div className="hidden md:block">
                        <div className=" flex space-x-4">
                            <Link href="/#home" prefetch>Home</Link>
                            <Link href="/#service" prefetch>Our Service</Link>
                            <Link href="/#about" prefetch>About Us</Link>
                            <Link href="/#team" prefetch>Our Team</Link>
                            <Link href="/#review" prefetch>Reviews</Link>
                            <Link href="/#contact" prefetch>Contact Us</Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={toggleNavbar} className="inline-flex items-center justify-center p-2 rounded-md text-gray-900">
                            <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />

                            </svg>
                            <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden transition-all`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link href="/#home" prefetch className='text-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>Home</Link>
                    <Link href="/#service" prefetch className='text-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>Our Service</Link>
                    <Link href="/#about" prefetch className='text-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>About Us</Link>
                    <Link href="/#team" prefetch className='text-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>Our Team</Link>
                    <Link href="/#review" prefetch className='text-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>Reviews</Link>
                    <Link href="/#contact" prefetch className='text-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>Contact Us</Link>
                </div>
                <div className="md:hidden flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="text-black bg-transparent border-[#2937B6] border font-medium rounded-lg text-sm px-4 py-2 text-center ml-[20px] mr-[10px]">Sign in</button>
                    <button type="button" className="text-white bg-[#2937B6] font-medium rounded-lg text-sm px-4 py-2 text-center ">Sign up</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;