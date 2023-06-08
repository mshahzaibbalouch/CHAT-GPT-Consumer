import axios from 'axios';
import React, { useState } from 'react';

function ApiConsumer() {
    const [prompt, setPrompt] = useState('');
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [error, setError] = useState('');
    const [history, setHistory] = useState([]);
    const [questionHistory, setQuestionHistory] = useState([]);

    const handleInputChange = (event) => {
        setPrompt(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post('http://localhost:3002/chat', { prompt })
            .then((res) => {
                setResponse(res.data);
                setError('');
            })
            .catch((err) => {
                if (err.response && err.response.data) {
                    setError(err.response.data);
                } else {
                    setError('An error occurred while making the request.');
                }
                setResponse('');
            });
        history.unshift(response);
        questionHistory.unshift(questionHistory,prompt);
        setQuestion(prompt);
        setPrompt('');
    };

    return (
        <div className="container mt-5">

            <div className="d-flex">
                <div className="history w-25 h-50">
                    <div className="new-chat">New Chat</div>
                    <div className="ul-history">
                        <div className='td-none'>
                            {
                                questionHistory.map((item) => {
                                    return (
                                        <div>{item}</div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="form w-75">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                value={prompt}
                                onChange={handleInputChange}
                                placeholder="Send a message."
                            />
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                    <div className="req">{question}</div>
                    {response && <div className="response">{
                        history.map((item)=>{
                            return(
                                <div className="">{item}</div>
                            )
                        })
                    }</div>}
                    {error && <div className="error">{error}</div>}
                </div>
            </div>
            <style>

                {`

      .td-none{

        list-style:none;


      }
      

      
 
      `}

            </style>
        </div>
    );
}

export default ApiConsumer;
