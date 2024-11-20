import React, { useEffect, useState } from 'react';
import { Card } from '../components/index';
import { Service } from '../service/Service';


function Interesting() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    try {
      Service.getAllQuestion().then((data) => {
        setQuestions(data.items);
      })

    } catch (error) {
      console.log(error);

    }
  },[])
  

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

export default Interesting
