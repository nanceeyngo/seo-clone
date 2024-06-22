import React from 'react';
import { IoPlay } from "react-icons/io5";
import hero from "../assets/hero.webp";
import customers from "../assets/customers.webp";

const Services = () => {
    return (
        <>
            <div className='text-white mx[1.25rem] mt-[8rem]'>
                <div className='flex flex-col-reverse text-left w-[90%] m-auto md:w-[80%] md:text-center lg:text-left lg:w-[90%] lg:flex-row lg:justify-between lg:gap-8'>

                    <div className='m-auto mt-8 basis-[60%] lg:m-0 lg:mt-0'>
                        <p className='font-DMsans font-extrabold text-[0.9rem] tracking-widest text-[#4f45e0] mt-3'>VITE AGENCY</p>
                        <h1 className='font-poppins text-[2.2rem] md:text-[3.4rem] font-extrabold leading-none mt-4'>Full Service AI-Focused SEO Agency</h1>
                        <div className='lg:w-[75%]'><p className='font-DMsans font-medium text-[1rem] mt-5'>The importance of SEO services for companies seeking to attract new 
                        customers and increase traffic cannot be overstated.</p></div>
                        <button className='bg-[#3c4fbe] px-7 rounded-full py-4 text-white font-DMsans flex gap-2 items-center mt-8 md:m-auto md:mt-8 lg:m-0 lg:mt-8'><IoPlay size={25} />Watch Video</button>
                        <div className='w-[45%] md:w-[18%] mt-8 md:m-auto md:mt-8 lg:m-0 lg:mt-8'>
                                <img src={customers} alt="Customers"/>
                        </div>
                        <p className='font-DMsans font-semibold text-[0.9rem] mt-3'>Trusted by 1M+ people accross the globe</p>

                    </div>
                    <div className='m-auto w-[95%] md:w-[60%] lg:mt-20 xl:mt-0 lg:basis-[40%]'>
                        <img className='' src={hero} alt="HERO IMAGE" />
                    </div>
                </div>
                <section className='ml-8 font-DMsans grid grid-cols-2 gap-9 m-0 md:gap-0 md:grid-cols-4 md:text-center mt-20 md:mt-48 md:w-[80%] md:m-auto'>
                        <div className='order-4 md:order-1'>
                            <h1 className='text-[#c5f900] text-[1.9rem] md:text-[2.8rem] font-extrabold'>3K</h1>
                            <p className='font-bold text-[0.8rem] md:text-[1rem]'>Completed Projects</p>
                        </div>
                        <div className='order-3 md:order-2'>
                            <h1 className='text-[#c5f900] text-[1.9rem] md:text-[2.8rem] font-bold'>99%</h1>
                            <p className='font-bold text-[0.8rem] md:text-[1rem]'>Satisfaction Rate</p>
                        </div>
                        <div className='order-2 md:order-3'>
                            <h1 className='text-[#c5f900] text-[1.9rem] md:text-[2.8rem] font-bold'>6K+</h1>
                            <p className='font-bold text-[0.8rem] md:text-[1rem]'>Customers</p>
                        </div>
                        <div className='order-1 md:order-4'>
                            <h1 className='text-[#c5f900] text-[1.9rem] md:text-[2.8rem] font-bold'>19</h1>
                            <p className='font-bold text-[0.8rem] md:text-[1rem]'>Years Of Experience</p>
                        </div>
                </section>
            </div>
        </>
    );
};

export default Services;
