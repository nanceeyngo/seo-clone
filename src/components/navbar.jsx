import React from 'react';
import { useState } from 'react'; 
import { IoMenu, IoClose } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

export const Navbar = () => {

    const [showNav, setShowNav] = useState(true);

    const handleNav = () => {
        setShowNav(!showNav);
    }

    return (
        <div className='text-[white] flex justify-between items-center h-20 bg-red-700'>
        
            <h1 className='text-[25px] text-[gold] font-bold m-3 cursor-pointer'>MY VITE PAGE</h1>
        
                <ul className='hidden md:flex justify-between gap-5 uppercase font-bold'>
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/">Our Services</NavLink></li>
                    <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                </ul>
        
        <div className='hidden md:flex justify-between gap-4 m-3'>
            <button className='bg-[gold] px-4 rounded-lg py-2 text-black font-bold'>Login</button>
            <button className='bg-[gold] px-4 rounded-lg py-2 text-black font-bold'>Register</button>
        </div>
        
        <div className='md:hidden mr-8' onClick={handleNav}>
            {!showNav? <IoClose size={20} className='cursor-pointer' /> : <IoMenu size={30} className='cursor-pointer' /> }
       
        </div>
       
        {/* Mobile Navbar */}
        <div className={!showNav? 'left-[0%] fixed top-[0%] w-[60%] bg-[#464444] h-full block pl-4 pt-4 ease-in-out duration-500 md:hidden' : "fixed left-[100%] ease-in-out duration-500"}>
     
            <h1 className='text-[25px] text-[gold] font-bold cursor-pointer pt-2 m-3'>MY VITE PAGE</h1>

            <ul className='gap-6 pt-4 m-3 uppercase font-bold'>
                <li className='pb-2 border-b border-gray-500'><NavLink to="/home">Home</NavLink></li>
                <li className='pb-2 border-b border-gray-500'><NavLink to="/about">About</NavLink></li>
                <li className='pb-2 border-b border-gray-500'><NavLink to="/">Our Services</NavLink></li>
                <li className='pb-2 border-b border-gray-500'><NavLink to="/contact-us">Contact Us</NavLink></li>
            </ul>
            
        <div className='space-y-4'>
            <button className='bg-[gold] px-4 rounded-lg py-2 text-black block font-bold w-full m-auto'>Login</button>
            <button className='bg-[gold] px-4 rounded-lg py-2 text-black block font-bold w-full m-auto'>Register</button>
        </div>
        </div>
        </div>
    )
}