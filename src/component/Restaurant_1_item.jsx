import React from 'react'
import { MdStars } from 'react-icons/md'

const Restaurant_1_item = () => {
    return (
        <>
            <div className='px-2 lg:px-[200px] pt-10'>
                <div>
                    <h2 className='font-bold text-[23px] px-2'>Top Restaurant Chains in Bangalore</h2>
                </div>
                <div className='p-3 flex overflow-x-scroll no-scrollbar mt-2 '>
                    <div className='p-3 transition hover:scale-95 duration-300 '>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/28fb13049b4e55297bb3f703cde63c35"
                                alt="" className='h-[200px] w-[300px] rounded-2xl' />
                        </div>
                        <div className='px-5 mt-2'>
                            <h1 className='font-semibold text-gray-800 text-[18px]'>Burger King</h1>
                            <div className='flex items-center mt-[-2px]' >
                                <div>
                                    <MdStars className='text-green-700 h-[20px] w-[20px]' />
                                </div>
                                <div className='text-gray-800'>4.1</div>

                            </div>
                            <div className='text-gray-500'>Burgers, American</div>
                            <div className='text-gray-500'>Basanvanagudi</div>
                        </div>
                    </div>
                    <div className='p-3 transition hover:scale-95 duration-300'>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/90ac3da2963978f866177263fba805a7"
                                alt="" className='h-[200px] w-[300px] rounded-2xl' />
                        </div>
                        <div className='px-5 mt-2'>
                            <h1 className='font-semibold text-gray-900 text-[18px]'>Wow! Momo</h1>
                            <div className='flex items-center mt-[-2px]'>
                                <div>
                                    <MdStars className='text-green-700 h-[20px] w-[20px]' />
                                </div>
                                <div className='text-gray-800'>4.2</div>

                            </div>
                            <div className='text-gray-500 text-ellipsis'>Tibetian, Asian, Chinese</div>
                            <div className='text-gray-500'>Jayanagar</div>
                        </div>
                    </div>
                    <div className='p-3 transition hover:scale-95 duration-300'>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/28fb13049b4e55297bb3f703cde63c35"
                                alt="" className='h-[200px] w-[300px] rounded-2xl' />
                        </div>
                        <div className='px-5 mt-2'>
                            <h1 className='font-semibold text-gray-800 text-[18px]'>Burger King</h1>
                            <div className='flex items-center mt-[-2px]' >
                                <div>
                                    <MdStars className='text-green-700 h-[20px] w-[20px]' />
                                </div>
                                <div className='text-gray-800'>4.1</div>

                            </div>
                            <div className='text-gray-500'>Burgers, American</div>
                            <div className='text-gray-500'>Basanvanagudi</div>
                        </div>
                    </div>
                    <div className='p-3 transition hover:scale-95 duration-300'>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/28fb13049b4e55297bb3f703cde63c35"
                                alt="" className='h-[200px] w-[300px] rounded-2xl' />
                        </div>
                        <div className='px-5 mt-2'>
                            <h1 className='font-semibold text-gray-800 text-[18px]'>Burger King</h1>
                            <div className='flex items-center mt-[-2px]' >
                                <div>
                                    <MdStars className='text-green-700 h-[20px] w-[20px]' />
                                </div>
                                <div className='text-gray-800'>4.1</div>

                            </div>
                            <div className='text-gray-500'>Burgers, American</div>
                            <div className='text-gray-500'>Basanvanagudi</div>
                        </div>
                    </div>





                </div>

            </div>
            <hr className='mt-[40px] mx-4 lg:mx-[115px]' />
        </>
    )
}

export default Restaurant_1_item
