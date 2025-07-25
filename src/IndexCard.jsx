import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Button from './Button';

function FlashCard({ frontText, backText, className = '', onClick }) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
    if (onClick) onClick(); // optional callback to track clicks
  };

  return (
    <div
      className={`w-64 h-40 ${className} perspective cursor-pointer`}
      onClick={handleClick}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full text-yellow-700 bg-green-900 italic flex items-center justify-center rounded shadow backface-hidden">
          {frontText}
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full text-green-900 bg-yellow-800 italic flex items-center justify-center rounded shadow rotate-y-180 backface-hidden">
          {backText}
        </div>
      </div>
    </div>
  );
}

export default FlashCard;
