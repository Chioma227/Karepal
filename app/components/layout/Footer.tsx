import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (

        <footer className="bg-[#001727]">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-5">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="flex items-center">
                            <h2 className='font-semibold text-white'>Karepal</h2>
                        </a>
                        <p className='text-gray-300 mt-[30px]'>Transforming care giving through data driven AI tools</p>
                    </div>
                    {/* <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"> */}
                    <div>
                        <h2 className="mb-6 text-sm text-[#2937B6] ">Quick Links</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className='mb-4'>
                                <Link href="/#home" prefetch >Home</Link>
                            </li>
                            <li className='mb-4'>
                                <Link href="/#service" prefetch>Our Service</Link>
                            </li>
                            <li className='mb-4'>
                                <Link href="/#about" prefetch>About Us</Link>
                            </li>
                            <li className='mb-4'>
                                <Link href="/#team" prefetch>Our Team</Link>
                            </li>
                            <li className='mb-4'>
                                <Link href="/#review" prefetch>Reviews</Link>
                            </li>
                            <li className='mb-4'>
                                <Link href="/#contact" prefetch >Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm text-[#2937B6] ">Support</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="/" className="hover:underline ">Account</a>
                            </li>
                            <li className="mb-4">
                                <a href="/" className="hover:underline ">Feedback</a>
                            </li>
                            <li className="mb-4">
                                <a href="/" className="hover:underline ">Contact Us</a>
                            </li>
                            <li>
                                <a href="/" className="hover:underline">Accessibility</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm text-[#2937B6] ">Socials</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Twitter</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">LinkedIn</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Thread</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Facebook</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"></h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Google Play</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">App Store</a>
                            </li>
                        </ul>
                    </div>
                    {/* </div> */}
                </div>
                {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
                <div className="sm:flex sm:items-center sm:justify-between mt-16">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024G <a href="/" className="hover:underline">Karepal</a>. All Rights Reserved.
                    </span>
                    <div className='md:mt-0 mt-[15px] md:mb-0 mb-[10px]'>
                        <small style={{color:"white"}}>Designed By <a href="https://www.linkedin.com/in/mfoniso-ibokette-a85772267/" style={{color:"gray", textDecoration:"underline"}}>Mfoniso Ibokette</a> and developed By <a href="https://www.linkedin.com/in/chioma-okeke-a7823b237/" style={{color:"gray", textDecoration:"underline"}}>Chioma Okeke</a></small>
                    </div>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="#" className="text-white hover:text-gray-900 dark:hover:text-gray-500 ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="#" className="text-white hover:text-gray-900 dark:hover:text-gray-500 ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="#" className="text-white hover:text-gray-900 dark:hover:text-gray-500 ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd" />
                            </svg>
                            <span className="sr-only">Dribbble account</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
