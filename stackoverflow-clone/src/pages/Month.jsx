import React, { useEffect, useState } from 'react';
import { Card } from '../components/index';
import { Service } from '../service/Service';


function Month() {
    const [questions, setQuestions] = useState([]);
    
    useEffect(() => {
        Service.getMonthQuestion().then((data) => {
            setQuestions(data.items);
        })
    },[])

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

export default Month

