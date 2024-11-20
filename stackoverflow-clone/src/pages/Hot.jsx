import React, { useEffect, useState } from 'react';
import { Card } from '../components/index';
import { Service } from '../service/Service';


function Hot() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    try {
      Service.getHotQuestion().then((data) => {
        setQuestions(data.items);
      })

    }catch(error) {
      console.log(error);
      
    }
  }, [])


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

export default Hot
