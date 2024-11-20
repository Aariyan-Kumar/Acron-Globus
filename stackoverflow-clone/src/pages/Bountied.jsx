import React, { useEffect, useState } from 'react';
import { Card } from '../components/index';
import { Service } from '../service/Service';


function Bountied() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        Service.getBountiedQuestion().then((data) => {
            setQuestions(data.items);
            // console.log(data);
        })
    }, [])


    // setQuestions(data.items)


    return (
        <>
            {questions.map((question) => (
                <div key={question.question_id}>
                    <Card {...question} />
                </div>
            ))}
        </>
    )
}

export default Bountied
