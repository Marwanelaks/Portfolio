import React, { useEffect,useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    console.log('User connected');
    socket.on('message', (message) => {
      console.log(`Received message: ${message}`);
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });

    return () => {
      socket.off('message');
      socket.off('disconnect');
    };
  }, []);

  const sendMessage = (message) => {
    console.log(`Sending message: ${message}`);
    socket.emit('message', message);
  };
    
  const handleMessageSend = () => {
   if (inputValue) {
     socket.emit('message', inputValue);
     setInputValue('');
   }
 };

  return (   
      <div className="chat-container">
      <div className="message-container">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button onClick={handleMessageSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatRoom;
