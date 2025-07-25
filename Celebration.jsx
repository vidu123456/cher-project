import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

function Celebration({ coins, setCoins }) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const navigate = useNavigate();

  // Handle window resizing for Confetti
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animate coin increment from 0 to 50
  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count++;
      setCoins((prev) => prev + 1);
      if (count >= 50) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, [setCoins]);

  return (
    <div className="min-h-screen bg-gray-100 fixed inset-0 flex flex-col justify-center items-center">
      <Confetti width={windowSize.width} height={windowSize.height} />

      <h1 className="text-5xl font-bold font-sans text-green-700 mb-4"> You Did It! </h1>
      <p className="text-2xl text-gray-800 mb-6">
        You've completed all the home inspection modules.
      </p>

      <div className="bg-yellow-400 text-white text-3xl font-semibold rounded-full w-40 h-40 flex items-center justify-center shadow-lg mb-8 transition-all duration-500">
         {coins} Coins
      </div>

      <Button
        text="Return Home"
        onClick={() => navigate('/')}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition"
      />
    </div>
  );
}

export default Celebration;