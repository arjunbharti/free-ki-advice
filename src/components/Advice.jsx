import React, { useState, useEffect } from 'react'
import '../styles/advice.css'
import axios from 'axios';

const Advice = () => {
    const [advice, setAdvice] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getAdvice();
    }, []);


    const getAdvice = async () => {
        try {
            setLoading(true);
            const adviceText = await axios.get("https://api.adviceslip.com/advice");
            setAdvice(adviceText.data.slip.advice);
            setLoading(false);
        } catch (error) {
            alert(error.message)
        }  
    }

    return (
      <div className='advice-card'>
          <p className="advice-text">
              {loading ? (<img src="/loading.jpeg" alt='loading'/>) : (<p className='advice-text'>{advice}</p>)}
          </p>
          <button onClick={() => getAdvice()} className='advice-btn'>Another advice</button>
            <div className='share-btn'>
                <a className='twitter-share-button' href={`https://twitter.com/intent/tweet?text=${advice}  ~ via free-ki-advice`}>
                  Click here to tweet this advice and be a motivational speaker 😂
                </a>
            </div>
      </div>
    )
}

export default Advice