// src/components/NewChatButton.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const NewChatButton = ({ onNewChat }) => {
  return (
    <button
      onClick={onNewChat}
      className="flex items-center px-4 py-2 text-2xl rounded hover:bg-gray-200 transition duration-200"
    >
      <FontAwesomeIcon icon={faEdit} />
    </button>
  );
};

export default NewChatButton;
