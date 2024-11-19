import React from 'react'

function Card({ props }) {
    return (
        <>
            <div className='border-2 min-h-48 shadow-sm hover:shadow-lg w-[100%] duration-200'>
                <h1 className='text-[1.5rem] px-8 py-6 font-bold tracking-wider leading-8 text-[#717171]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, laboriosam.</h1>
                <div>
                    <ul className='flex space-x-2 mx-8' >
                        {
                            <>
                                <li className='outline outline-1 outline-blue-100 px-5 rounded-full tracking-widest font-semibold text-xs py-2 text-[#717171] cursor-pointer hover:bg-orange-500 hover:text-gray-50'>Android</li>
                                <li className='outline outline-1 outline-blue-100 px-5 rounded-full tracking-widest font-semibold text-xs py-2 text-[#717171] cursor-pointer hover:bg-orange-500 hover:text-gray-50'>Kotlin</li>
                            </>
                        }
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Card
