import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Button from './Button';
import Box from './Box';
import IndexCard from './IndexCard';

function Lesson1({ coins, setCoins, progress, setProgress }) {
  const navigate = useNavigate();
const cards = [
  {
    front: 'What is a home inspection?',
    back: "A home inspection is a visual assessment of a property's condition, typically done before buying or selling."
  },
  {
    front: 'Why get an inspection?',
    back: 'To uncover potential issues in the home before committing to a purchase.'
  },
  {
    front: 'Who performs home inspections?',
    back: 'Licensed or certified home inspectors with specialized training.'
  },
  {
    front: 'What does a home inspection include?',
    back: 'Roof, foundation, plumbing, electrical systems, HVAC, and structural components.'
  },
  {
    front: 'Is a home inspection required?',
    back: 'No, but it is strongly recommended to avoid costly surprises.'
  },
  {
    front: 'Can a home "fail" an inspection?',
    back: 'No — inspectors report issues, but don’t pass or fail homes.'
  },
  {
    front: 'How long does a typical inspection take?',
    back: 'Usually 2 to 4 hours, depending on the size and condition of the home.'
  },
  {
    front: 'What happens after the inspection?',
    back: 'The inspector provides a report, which can be used to negotiate repairs or price.'
  }
];


  const [clickedCards, setClickedCards] = useState(new Set());

  const handleCardClick = (index) => {
    setClickedCards((prev) => {
      if (prev.has(index)) return prev;
      const newSet = new Set(prev);
      newSet.add(index);
      return newSet;
    });
  };

  const cardProgress = clickedCards.size / cards.length;

  return (
    <div className="text-red-100">
      <Box>
        <p className="fixed top-4 right-4 w-24 h-24 bg-indigo-500 rounded-full font-sans shadow text-sm text-yellow-400 flex items-center justify-center">
          {coins} Coins
        </p>
      </Box>

      <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
        <p className="text-7xl mb-4 text-yellow-600 font-serif">Types Of House Inspections</p>

        {/* Progress bar */}
        <div className="w-[600px] h-4 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-yellow-400 transition-all duration-500"
            style={{ width: `${Math.min(cardProgress, 1) * 100}%` }}
          />
        </div>

        {/* Debug (optional): shows clicked card indexes */}
        {/* <p className="text-white">Clicked: {Array.from(clickedCards).join(', ')}</p> */}

        <div className="flex flex-wrap justify-center gap-6">
          {cards.map((card, index) => (
            <IndexCard
              key={index}
              frontText={card.front}
              backText={card.back}
              onClick={() => handleCardClick(index)}
              className="ease-in-out"
            />
          ))}
        </div>

        <Button
          text="Finished"
          onClick={() => {
            setCoins(coins + 50);
            setProgress((prev) => Math.min(prev + 1 / 3, 1));
            navigate('/');
          }}
          className="px-4 py-4 bg-yellow-600 rounded-full transition-all duration-300 hover:scale-105 hover:bg-yellow-500 hover:text-white hover:shadow-md"
        />
      </div>
    </div>
  );
}

export default Lesson1;

