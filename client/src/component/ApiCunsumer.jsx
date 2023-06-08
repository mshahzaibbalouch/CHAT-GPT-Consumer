import axios from 'axios';
import React, { useState } from 'react';

function ApiConsumer() {
    const [prompt, setPrompt] = useState('');
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [error, setError] = useState('');
 
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
        setQuestion(prompt);
        setPrompt('');
    };

    return (
        <div className="container mt-5">

            <div className="d-flex">
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
                    <div className="req">{response}</div>
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
