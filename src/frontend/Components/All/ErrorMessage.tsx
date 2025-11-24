

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

interface ErrorMessageProps {
  message: string | null; 
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  
  if (!message) {
    return null;
  }

  return (
    
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded-md flex items-center animate-shake mt-[20px]" role="alert">
      <FontAwesomeIcon icon={faCircleExclamation} className="mr-3" />
      <p className="font-bold">{message}</p>
    </div>
  );
};

export default ErrorMessage;