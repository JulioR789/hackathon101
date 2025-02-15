'use client';

import React, { useState } from 'react';

const Chatroom = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  const handleSendMessage = () => {
    if (username.trim() === '') {
      alert('Please enter a username.');
      return;
    }
    if (message.trim() === '') {
      return; // Don't send empty messages
    }

    const newMessage = `${username}: ${message}`;
    setChatHistory([...chatHistory, newMessage]);
    setMessage(''); // Clear the message input after sending
  };

  return (
    <div className="flex flex-col h-screen bg-blue-50"> {/* Blue background for the whole chatroom */}
      <header className="bg-blue-700 p-4 text-white shadow-md"> {/* Blue header */}
        <h1 className="text-xl font-semibold">Blue Chatroom</h1>
      </header>

      <div className="flex-1 p-4 overflow-y-auto space-y-2"> {/* Chat history area - scrollable */}
        {chatHistory.map((msg, index) => (
          <div key={index} className="bg-blue-100 p-2 rounded-lg shadow-sm"> {/* Message bubbles */}
            <p className="text-blue-800 text-sm">{msg}</p> {/* Message text */}
          </div>
        ))}
      </div>

      <div className="p-4 bg-blue-200 border-t border-blue-300"> {/* Input area background */}
        <div className="mb-2">
          <input
            type="text"
            placeholder="Enter username"
            className="w-full px-3 py-2 rounded-md border border-blue-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Enter message"
            className="flex-1 px-3 py-2 rounded-md border border-blue-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatroom;