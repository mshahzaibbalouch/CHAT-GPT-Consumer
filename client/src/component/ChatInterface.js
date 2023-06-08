
import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';

function ChatInterface() {
  const [history, setHistory] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const chatContainerRef = useRef(null);

  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [history]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      try {
        const response = await axios.post('http://localhost:3002/chat', { prompt: inputValue });
        const newMessage = { content: inputValue, sender: 'user', id: Date.now() };
        const newResponse = { content: response.data, sender: 'server', id: Date.now() + 1 };

        setHistory((prevHistory) => [...prevHistory, newMessage, newResponse]);
        setQuestions((prevQuestions)=>[inputValue, ...prevQuestions]);

        setInputValue('');
        setError('');
      } catch (err) {
        if (err.response && err.response.data) {
          setError(err.response.data);
        } else {
          setError('An error occurred while making the request.');
        }
      }
    }
  };

  const handleDeleteChat = (id) => {
    setHistory((prevHistory) => prevHistory.filter((message) => message.id !== id));
  };

  const handleDeleteHistory = () => {
    setHistory([]);
  };

  return (
    <div className='d-flex'>
        <div className='w-25 p-5 bg-dark text-light'>
            <div className='new-chat'>
                <button onClick={handleDeleteHistory} className='fs-5 newchat-btn bg-dark text-light border-light border-2px'>New Chat</button>
            </div>
            <div className='question pt-3'>
                    {
                        questions.map((item)=>{
                            return(
                                <div className='fs-5 newchat-btn bg-dark text-light border-light border-2px'>{item}</div>
                            )
                        })
                    }
            </div>
        </div>
        <div className="container chat-interface">
      <div className="chat-container" ref={chatContainerRef}>
        {history.length === 0 ? (
          <div className="empty-history mb-5">No chat history</div>
        ) : (
          history.map((message) => (
            <div key={message.id} className={`message ${message.sender}`}>
              <span className="message-content">{message.content}</span>
              <button
                className="delete-chat"
                onClick={() => handleDeleteChat(message.id)}
                title="Delete Chat"
              >
                &#10005;
              </button>
            </div>
          ))
        )}
      </div>
      <form onSubmit={handleSubmit} className="input-form mb-2 mt-5">
        <input
          type="text"
          className="input-field"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Send a message."
        />
        <button type="submit" className="send-button">
          Submit
        </button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
    
    </div>
  );
}

export default ChatInterface;
