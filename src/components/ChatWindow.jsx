// src/components/ChatWindow.jsx
import React, { useEffect, useRef } from 'react';
import Message from './Message';

const ChatWindow = ({ messages }) => {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-6">
      {messages.map((msg, index) => (
        <Message
          key={index}
          role={msg.role}
          content={msg.content}
          timestamp={msg.timestamp}
        />
      ))}
      <div ref={endRef} />
    </div>
  );
};

export default ChatWindow;
