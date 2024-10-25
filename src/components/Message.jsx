import React from 'react';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRobot, faQuestionCircle, faCopy } from '@fortawesome/free-solid-svg-icons';

const Message = ({ role, content, timestamp }) => {
  const isUser = role === 'user';
  const isAssistant = role === 'assistant';

  const getAvatar = () => {
    if (isUser) return <FontAwesomeIcon icon={faUser} />;
    if (isAssistant) return <FontAwesomeIcon icon={faRobot} />;
    return <FontAwesomeIcon icon={faQuestionCircle} />;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      alert('Message copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy text:', error);
      alert('Failed to copy message.');
    }
  };

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      {!isUser && (
        <div className="flex-shrink-0 mr-2">
          <span className="text-2xl" role="img" aria-label="avatar">{getAvatar()}</span>
        </div>
      )}
      
      <div className="relative max-w-4xl">
        <div className={`message-container p-3 rounded-lg bg-gray-100 min-w-fit`}>
          <ReactMarkdown className="whitespace-pre-wrap">{content}</ReactMarkdown>
          {!isUser && (
            <button
              onClick={handleCopy}
              className="absolute bottom-0 right-0 mt-1 mr-1 text-gray-500 hover:text-gray-700"
              aria-label="Copy message"
            >
              <FontAwesomeIcon icon={faCopy} />
            </button>
          )}
        </div>
        <div className="text-xs text-gray-400 mt-1">
          {moment(timestamp).format('hh:mm A')}
        </div>
      </div>
      
      {isUser && (
        <div className="flex-shrink-0 ml-2">
          <span className="text-2xl" role="img" aria-label="avatar">{getAvatar()}</span>
        </div>
      )}
    </div>
  );
};

export default Message;
