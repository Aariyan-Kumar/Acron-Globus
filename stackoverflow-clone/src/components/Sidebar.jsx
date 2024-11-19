import React from 'react';
import SideLogo from '../assets/sidebar-logo.svg';
import { Link, NavLink } from 'react-router-dom';
import HomeIcon from '../assets/blank-house.png'
import PublicIcon from '../assets/world.png'
import CollectiveIcon from '../assets/favorite.png';
import JobIcon from '../assets/Jobs.png'
import TeamsIcon from '../assets/Teams.png'

function Sidebar() {

    const publicItems = [
        {
            name: "Questions",
            url: '/',
        },
        {
            name: "Tags",
            url: '/',
        },
        {
            name: "Users",
            url: '/',
        }
    ]

    const collectivesItems = [
        {
            name: "Explore Jobs",
            url: '/',
        }
    ]

    const findJobsItems = [
        {
            name: "Jobs",
            url: '/',
        },
        {
            name: "Companies",
            url: '/',
        }
    ]

    const teamsItems = [
        {
            name: "+ Create a team",
            url: '/',
        }
    ]

    return (
        <>
            <div className='border-2 border-transparent max-w-60 min-h-screen'>
                <div className='max-w-[18rem] px-2 mx-7 my-16'>
                    <Link to="/">
                        <img src={SideLogo} alt="stackoverflow side logo" />
                    </Link>
                </div>

                <div>
                    <ul className='bg-[#fef4ec] text-justify py-3 px-10'>
                        <div className='flex'>
                            <img className='cursor-pointer w-5 mr-3 py-1' src={HomeIcon} alt="home icon" />
                            <span className='cursor-pointer font-[550]'>Home</span>
                        </div>
                    </ul>
                    <ul className='text-justify pt-5 px-10'>
                        <div className='flex'>
                            <img className='w-5 cursor-pointer mr-3 py-1' src={PublicIcon} alt="public icon" />
                            <span className='text-gray-500 text-sm my-1 cursor-pointer font-semibold'>PUBLIC</span>
                        </div>
                        {publicItems.map((item) => (
                            <li key={item.name}
                                className='font-semibold cursor-pointer ml-8 py-[0.3rem] text-gray-600'>
                                <NavLink
                                    to={item.url}
                                >
                                </NavLink>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                    <ul className='text-justify pt-5 px-10'>
                        <div className='flex'>
                            <img className='w-5 mr-3 cursor-pointer py-1' src={CollectiveIcon} alt="Collective icon" />
                            <span className='text-gray-500 text-sm my-1 font-semibold'>COLLECTIVES</span>
                        </div>
                        {collectivesItems.map((item) => (
                            <li key={item.name}
                                className='font-semibold cursor-pointer ml-8 py-[0.3rem] text-gray-600'
                            >
                                <NavLink
                                    to={item.url}
                                >
                                </NavLink>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                    <ul className='text-justify pt-5 px-10'>
                        <div className='flex'>
                            <img className='w-5 mr-3 py-1 cursor-pointer' src={JobIcon} alt="job icon" />
                            <span className='text-gray-500 cursor-pointer text-sm my-1 font-semibold'>FIND JOBS</span>
                        </div>
                        {findJobsItems.map((item) => (
                            <li key={item.name}
                                className='font-semibold cursor-pointer ml-8 py-[0.3rem] text-gray-600'
                            >
                                <NavLink
                                    to={item.url}
                                >
                                </NavLink>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                    <ul className='text-justify pt-5 px-10'>
                        <div className='flex'>
                            <img className='w-5 mr-3 py-1 cursor-pointer' src={TeamsIcon} alt="Teams icon" />
                            <span className='text-gray-500 cursor-pointer text-sm my-1 font-semibold'>TEAMS</span>
                        </div>
                        {teamsItems.map((item) => (
                            <li key={item.name}
                                className='font-semibold cursor-pointer ml-8 py-[0.3rem] text-gray-600'
                            >
                                <NavLink
                                    to={item.url}
                                >
                                </NavLink>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar
