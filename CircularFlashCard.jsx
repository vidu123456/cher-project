// CircularFlashCard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Button from './Button';
function CircularFlashCard({ frontText, backText, isFlipped, onClick, isCorrect }) {
  return (
    <div
      className="w-40 h-40 rounded-full perspective cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full text-yellow-100 bg-green-800 italic flex items-center justify-center rounded-full shadow backface-hidden">
          {frontText}
        </div>

        {/* Back */}
        <div className="absolute w-full h-full text-green-900 bg-yellow-400 italic flex items-center justify-center rounded-full shadow rotate-y-180 backface-hidden">
          {isCorrect ? 'Correct!' : backText}
        </div>
      </div>
    </div>
  );
}

export default CircularFlashCard;