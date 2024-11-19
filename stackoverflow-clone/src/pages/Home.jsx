import React from 'react';
import Search from '../assets/search.png'

function Home() {
    return (
        <>
            <div>
                <div className='w-[770px] min-h-full'>
                    <div className='my-16 px-8 flex justify-'>
                        <input
                            type="text"
                            id="filters"
                            className="outline outline-2 outline-gray-200 rounded-full text-gray-700 text-sm block w-9/12 py-3 px-6 placeholder:text-[13px] placeholder:tracking-wider placeholder:font-semibold placeholder:text-[#ababab]"
                            placeholder="Search Your Answers Here..."
                            required
                        />
                        <button className='w-7 relative -start-12'>
                            <img src={Search} alt="Search Icon" />
                        </button>
                        <div>
                            <p className='text-[15px] tracking-wider py-3 mx-5 cursor-pointer'>Products</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
