
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from './Button'; // Import component Button của bạn

interface SuccessModalProps {
  isOpen: boolean; 
  onClose: () => void; 
  title: string;
  message: string;
  buttonText: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, title, message, buttonText }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div onClick={onClose} className="fixed h-full w-full inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div onClick={(e) => e.stopPropagation()} className="bg-white p-8 rounded-lg shadow-xl text-center max-w-sm animate-zoomIn">
        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-6xl mb-4" />

        <h2 className="text-2xl font-bold mb-2 uppercase">{title}</h2>

        <p className="text-gray-600 mb-6">{message}</p>

        <button type='button' onClick={onClose} className="w-full py-[20px]  text-white  bg-main font-[700] text-[16px] rounded-lg  px-[35px] mt-[5px] relative cursor-pointer overflow-hidden uppercase group  duration-700">
                <span className="z-10 relative">
                    {buttonText}
                </span>

                <div
                    className="absolute w-full h-1/2 bg-[length:200%_100%] top-full left-0 animate-wave duration-300 group-hover:top-1/2"
                    style={{
                        backgroundImage: "url('/src/frontend/assets/images/wave-yellow.svg')",
                    }}
                        />
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;