import React from 'react';
import { IoPlay } from "react-icons/io5";
import hero from "../assets/hero.webp";

const Services = () => {
    return (
        <>
            <div className='text-white mx[1.25rem] mt-[8rem]'>
                <div className='flex flex-col-reverse m-auto text-center w-[80%] lg:w-[90%] lg:flex-row justify-between gap-8 text'>

                    <div className='m-auto basis-3/5 lg:m-0'>
                        <p className='font-DMsans font-extrabold text-[0.9rem] tracking-widest text-[#4f45e0] mt-2'>VITE AGENCY</p>
                        <h1 className='font-poppins text-[3.4rem] font-extrabold leading-none mt-4'>Full Service AI-Focused SEO Agency</h1>
                        <div className='lg:w-[75%]'><p className='font-DMsans font-medium text-[1rem] mt-4'>The importance of SEO services for companies seeking to attract new 
                        customers and increase traffic cannot be overstated.</p></div>
                            <button className='bg-[#3c4fbe] px-7 rounded-full py-4 text-white font-DMsans mt-6 flex gap-2 items-center'><IoPlay size={25} />Watch Video</button>
                    </div>
                    <div className='mt-20 basis-2/5 xl:mt-0'>
                        <img className='' src={hero} alt="HERO IMAGE" />
                    </div>


                </div>

            </div>
        </>
    );
};

export default Services;
