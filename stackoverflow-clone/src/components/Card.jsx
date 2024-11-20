import React from 'react';
import WarningIcon from '../assets/Warning.png';
import ChatIcon from '../assets/chat.png';
import VisibleIcon from '../assets/visible.png';
import { Link } from 'react-router-dom';

function Card(questions) {
    // Given timestamp
    const timestamp = questions.creation_date;
    // console.log(questions.creation_date);


    // Convert to milliseconds and create a Date object
    const date = new Date(timestamp * 1000);

    // Format the date to a readable string
    const readableDate = date.toLocaleString();
    // console.log("Readable Date:", readableDate);

    // console.log(questions);

    return (
        <>
            <div className='min-h-48 shadow-sm hover:shadow-lg w-[100%] duration-200'>
                <Link
                    to={questions.link}
                    target='_blank'
                >
                    <h1 className='text-[1.5rem] px-8 py-6 font-bold tracking-wider leading-8 text-[#717171]'>{questions.title}</h1>
                </Link>
                <div>
                    <ul className='flex space-x-2 mx-8' >
                        {
                            questions.tags.map((tag) => (
                                <li key={tag} className='outline outline-1 outline-blue-100 px-5 rounded-full tracking-widest font-semibold text-xs py-2 text-[#717171] cursor-pointer hover:bg-orange-500 hover:text-gray-50'>{tag}</li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <ul className='flex px-9 space-x-7 my-5'>
                            <li className='flex space-x-2 text-sm'><img className='w-4 h-4' src={WarningIcon} alt="" /><span className='font-semibold'>{questions.score}</span></li>
                            <li className='flex space-x-2 text-sm'><img className='w-4 h-4' src={ChatIcon} alt="" /><span className='font-semibold'>{questions.answer_count}</span></li>
                            <li className='flex space-x-2 text-sm'><img className='w-4 h-4' src={VisibleIcon} alt="" /><span className='font-semibold'>{questions.view_count}</span></li>
                        </ul>
                        {questions.bounty_amount && (
                            <p className='text-[10px] px-9 my-5 tracking-wider font-semibold text-[#717171]'>Bountied : {questions.bounty_amount}</p>
                        )}
                        <div>
                            <p className='text-[10px] px-9 my-5 tracking-wider font-semibold text-[#717171]'>
                                asked {readableDate} ago :
                                <Link
                                    to={questions.owner.link}
                                    target='_blank'>
                                    <span className='text-blue-400'>{questions.owner.display_name}</span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card
