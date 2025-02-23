import React, { useEffect, useState } from 'react';
import { Card } from '../components/index';
import { Service } from '../service/Service';
import { BeatLoader } from 'react-spinners';


function Hot() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    Service.getHotQuestion()
      .then((data) => {
        setQuestions(data.items);
      }).finally(() => {
        setLoading(false);
      })
  }, [])

  if(!loading) {
    return (
      <>
        {questions.map((question) => (
          <div key={question.question_id}>
            <Card {...question} />
          </div>
        ))}
      </>
    )
  } else {
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

export default Hot
