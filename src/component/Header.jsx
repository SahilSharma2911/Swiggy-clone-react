import React from 'react'
import { SiSwiggy } from 'react-icons/si'
import { BiSolidNavigation, BiChevronDown } from 'react-icons/bi'
import { AiOutlineSearch, AiOutlineRight } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'

const Navbar = () => {
    return (
        <>

            <div className='px-3 lg:px-[178px] justify-between lg:justify-normal h-[80px] items-center flex shadow-gray-200 shadow-lg sticky top-0 bg-white z-50'>
                <div className="flex py-[22px]">
                    <SiSwiggy className='text-orange-600 w-[35px] h-[35px] ' />
                    <h1 className='font-bold text-[26px] mx-2 font-sans my-[-2px]'>Swiggy</h1>
                    <div className="lg:bg-slate-300 h-[24px] w-[0.5px] ml-[8px] mt-2"></div>
                </div>
                <div>
                    <button className=" hidden lg:flex">
                        <div><BiSolidNavigation className='text-orange-600 w-[20px] h-[20px] my-[24px] ml-[20px] mr-2 ' /></div>
                        <div><h2 className='font-semibold text-[17px] my-[22px]'>Setup your precise location</h2></div>
                        <div><BiChevronDown className='text-orange-600 w-[22px] h-[22px]  my-[24px]' /></div>
                    </button>

                </div>

                <div className="hidden lg:flex ml-[9.5vw] bg-gray-200 py-[12px] w-[32.5vw] rounded-xl">
                    <input type="text" placeholder='Search for restaurant and food' className='w-[92%] ml-2 bg-gray-200 text-[15px] px-2 outline-none' />
                    <AiOutlineSearch className='w-[65px] h-[22px] text-gray-700' />
                </div>
                <div>
                    <FaUserCircle className='w-[50px] h-[50px] ml-[30px] ' />
                </div>
            </div>
            <div className="flex-col flex lg:hidden sticky top-[80px] bg-white z-50 ">
                <div className="flex">
                    <BiSolidNavigation className='text-orange-600 w-[20px] h-[20px] my-[16px] ml-[20px] mr-2 ' />
                    <h2 className='font-semibold text-[16.5px] my-[16px]'>Setup your precise location</h2>
                    <AiOutlineRight className='text-orange-600 w-[22px] h-[16px]  my-[21px] font-bold' />
                </div>
                <div className='px-4'>
                    <div className="flex bg-gray-200 py-[12px] w-[100%] rounded-xl">
                        <input type="text" placeholder='Search for restaurant and food' className='w-[92%] ml-2 bg-gray-200 text-[15px] px-2 outline-none' />
                        <AiOutlineSearch className='w-[65px] h-[22px] text-gray-700' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar
