import React from 'react';
import { Outlet } from 'react-router-dom';
import { Search } from '../components/index';
import { Card } from '../components/index';


function Home() {



    return (
        <>
            <div className='w-[770px] min-h-full'>
                <Search />
                <main>
                    <Outlet />
                </main>
            </div>

        </>
    )
}

export default Home
