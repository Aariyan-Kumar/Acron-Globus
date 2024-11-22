import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Card } from '../components/index';
import { BeatLoader } from 'react-spinners';


function Search() {

    const location = useLocation();
    const [loading, setLoading] = useState(true);

    const { results } = location.state || {};

    useEffect(() => {
        // Delay to simulate a realistic loading scenario (can be removed or adjusted)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Adjust the delay as needed

        return () => clearTimeout(timer); // Cleanup timeout
    }, []);

    console.log(results);


    if (!loading) {
        return (
            <>
                {results.length ? (
                    results.map((question) => (
                        <div key={question.question_id}>
                            <Card {...question} />
                        </div>
                    ))
                ) : (
                    <p>No search results found!</p>
                )}
            </>
        )
    }
    else {
        return (
            <>
                <div className='flex justify-center items-center min-h-screen'>
                    <BeatLoader
                        color="#ff6d03"
                        loading={loading}
                        margin={10}
                        size={20}
                        speedMultiplier={1}
                    />
                </div>
            </>
        )
    }

}

export default Search;
