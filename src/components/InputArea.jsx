// src/components/InputArea.jsx

import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faStopCircle } from '@fortawesome/free-solid-svg-icons';

const InputArea = ({
  content,
  setContent,
  handleSend,
  isLoading,
}) => {
  const textareaRef = useRef(null);

  // Remove the Enter key handling for sending messages
  const handleKeyDown = (e) => {
    // Allow Enter key to insert a new line
    if (e.key === 'Enter' && !e.shiftKey) {
      // No need to prevent default behavior
    }
  };

  const handleChange = (e) => {
    setContent(e.target.value);
    // Auto-resize textarea
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  const handleSendMessage = () => {
    handleSend();
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset height
    }
  };

  return (
    <div className="flex w-full gap-2 rounded-[26px] p-1.5 transition-colors contain-inline-size bg-gray-100">
      <div className="flex min-w-0 flex-1 flex-col">
        <textarea
          ref={textareaRef}
          value={content}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="flex p-2 placeholder:text-gray-500 bg-gray-100 resize-none focus:outline-none"
          placeholder="Message ChatGPT"
          rows={1}
          disabled={isLoading} // Disable textarea when loading
        />
      </div>
      <div className="min-w-8 relative">
        <button
          onClick={handleSendMessage}
          className={`w-10 h-10 absolute bottom-0 right-1 flex items-center justify-center rounded-full transition duration-200 ${
            content || isLoading ? 'bg-black text-white' : 'bg-gray-200 text-black'
          } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isLoading} // Disable button when loading
        >
          {isLoading ? <FontAwesomeIcon icon={faStopCircle} /> : <FontAwesomeIcon icon={faPaperPlane} />}
        </button>
      </div>
    </div>
  );
};

export default InputArea;
