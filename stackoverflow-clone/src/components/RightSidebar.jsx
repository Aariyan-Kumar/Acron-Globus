import React from 'react';
import Profile from '../assets/profile.png';
import Notification from '../assets/notes.png';
import Message from '../assets/message.png';
import Trophy from '../assets/Trophy.png';
import Pen from '../assets/pen.png';
import Logo from '../assets/logo.svg';


function RightSidebar() {
    return (
        <>
            <div className=' w-80'>
                <div className='mt-20 ml-5 px-7'>
                    <ul className='flex justify-evenly '>
                        <li className='w-6'>
                            <img className='cursor-pointer' src={Message} alt="Message icon" />
                        </li>
                        <li className='w-6'>
                            <img className='cursor-pointer' src={Trophy} alt="Trophy icon" />
                        </li>
                        <li className='w-6'>
                            <img className='cursor-pointer' src={Notification} alt="Notification icon" />
                        </li>
                        <li className='w-6'>
                            <img className='cursor-pointer' src={Profile} alt="profile icon" />
                        </li>
                    </ul>
                </div>
                <div className='w-full min-h-60 bg-[#fdfcfa] mt-8'>
                    <h1 className='px-6 pt-7 text-xl font-[600] text-[#484848] tracking-wide'>The Overflow Blog</h1>
                    <div>
                        <ul>
                            <li className='flex mx-auto py-2 px-6'>
                                <img className='w-5 h-5 cursor-pointer' src={Pen} alt="" />
                                <span>
                                    <p className='pl-3 text-[11px] cursor-pointer font-bold text-[#bdbbba]'>The unexpected benifits of mentoring others</p>
                                </span>

                            </li>
                            <li className='flex mx-auto py-2 px-6'>
                                <img className='w-5 h-5 cursor-pointer' src={Pen} alt="" />
                                <span>
                                    <p className='pl-3 text-[11px] cursor-pointer font-bold text-[#bdbbba]'>Podcast 354: Building for AR with Niantic Lab's augmented reality SDK</p>
                                </span>

                            </li>
                        </ul>
                    </div>
                    <h1 className='px-6 pt-7 text-xl font-[600] text-[#484848] tracking-wide'>Feature & meta</h1>
                    <div>
                        <ul>
                            <li className='flex mx-auto py-2 px-6'>
                                <img className='w-5 h-5 cursor-pointer' src={Logo} alt="" />
                                <span>
                                    <p className='pl-3 text-[11px] cursor-pointer font-bold text-[#bdbbba]'>Beta realesed of Collectives&trade; on Stack Overflow</p>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-full min-h-60 bg-[#f5f5f5]'>
                    <h1 className='px-6 pt-7 text-xl font-[600] text-[#484848] tracking-wide'>Hot meta Post</h1>
                    <div>
                        <ul>
                            <li className='flex mx-auto py-2 px-6'>
                                <p className='w-5 h-5 text-sm cursor-pointer text-[#6b6b6b] font-semibold'>8</p>
                                <span>
                                    <p className='pl-3 text-[11px] cursor-pointer font-bold text-[#bdbbba]'>Tags [driver] and [device-driver] appear to be redundant</p>
                                </span>

                            </li>
                            <li className='flex mx-auto py-2 px-6'>
                                <p className='w-5 h-5 text-sm cursor-pointer text-[#6b6b6b] font-semibold'>27</p>
                                <span>
                                    <p className='pl-3 text-[11px] cursor-pointer font-bold text-[#bdbbba]'>How to handle dupes where A is closed as dup of B but I have an answer that...</p>
                                </span>

                            </li>
                            <li className='flex mx-auto py-2 px-6'>
                                <p className='w-5 h-5 text-sm cursor-pointer text-[#6b6b6b] font-semibold'>27</p>
                                <span>
                                    <p className='pl-3 py-1 text-[11px] cursor-pointer font-bold text-[#bdbbba]'>Ambiguous tag [contaniers]</p>
                                </span>

                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h1 className='px-6 pt-7 text-xl font-[600] text-[#484848] tracking-wide'>Customer filter</h1>
                    <div className='py-4 px-2'>
                        <input type="text" id="first_name" className="bg-gray-50 border-2 rounded-sm border-gray-300 text-gray-900 text-sm block w-[87%] py-3 px-4 placeholder:text-blue-500 placeholder:text-[11px]" placeholder="add custom filters" required />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightSidebar
