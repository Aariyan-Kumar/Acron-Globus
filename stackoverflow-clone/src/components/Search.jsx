import React from 'react'
import SearchIcon from '../assets/search.png';
import { NavLink } from 'react-router-dom';
function Search() {

    const options = [
        {
            name: "Intersting",
            url: "/"
        },
        {
            name: "Bountied",
            url: "/bountied"
        },
        {
            name: "Hot",
            url: "/hot"
        },
        {
            name: "Week",
            url: "/week"
        },
        {
            name: "Month",
            url: "/month"
        },

    ]

    return (
        <>
            <div>
                <div className='my-16 px-12 flex justify-'>
                    <input
                        type="text"
                        id="filters"
                        className="outline outline-2 outline-gray-200 rounded-full text-gray-700 text-sm block w-9/12 py-3 px-6 placeholder:text-[13px] placeholder:tracking-wider placeholder:font-semibold placeholder:text-[#ababab]"
                        placeholder="Search Your Answers Here..."
                        required
                    />
                    <button className='w-7 relative -start-12'>
                        <img src={SearchIcon} alt="Search Icon" />
                    </button>
                    <div>
                        <p className='text-[14px] tracking-widest py-3 mx-5 cursor-pointer text-gray-500 font-bold'>Products</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-[1.5rem] px-12 tracking-widest text-[#5f5f5f] font-bold'>Top Question</h1>
                <div>
                    <div className='px-4 my-2 flex space-x-20'>
                        <ul className='flex space-x-0'>
                            {options.map((item) => (
                                <li key={item.name}
                                    className='py-4 ml-8 font-extrabold '
                                >
                                    <NavLink
                                        to={item.url}
                                        className={({ isActive }) =>
                                            `block py-2 px-5 duration-200 text-xs rounded-full tracking-[0.12rem] ${isActive ? "bg-[#ff6e00] text-gray-50" : "text-[#c7c7c7] hover:text-[#ff6e00]"}`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>

                                </li>
                            ))}
                        </ul>
                        <div>
                            <button
                                type='button'
                                className=' w-full text-white bg-[#0099ff] hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-extrabold tracking-wider rounded-full text-xs px-7 py-2 my-3 me-2 mb-2'
                            >
                                ASK QUESTION
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search
