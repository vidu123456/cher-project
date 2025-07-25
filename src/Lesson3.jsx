import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Button from './Button';
import CircularFlashCard from './CircularFlashCard';
import Box from './Box';

function Lesson3({ coins, setCoins,progress,setProgress}) {
  const navigate = useNavigate();

  const questions = [
    {
      prompt: 'Where would you check for attic mold?',
      answers: ['Attic', 'Basement', 'Kitchen', 'Garage', 'Bathroom'],
      correctIndex: 0,
    },
    {
      prompt: 'Where do you inspect for leaks under the sink?',
      answers: ['Roof', 'Living Room', 'Kitchen', 'Attic', 'Patio'],
      correctIndex: 2,
    },
    {
      prompt: 'Where is the HVAC filter usually located?',
      answers: ['Hallway', 'Basement', 'Garage', 'Attic', 'Roof'],
      correctIndex: 1,
    },
    {
      prompt: 'Where would water heater damage likely be?',
      answers: ['Closet', 'Basement', 'Bathroom', 'Porch', 'Laundry Room'],
      correctIndex: 1,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [flipped, setFlipped] = useState(Array(5).fill(false));
  const [correctCardIndex, setCorrectCardIndex] = useState(null);
  const [earnedCoins, setEarnedCoins] = useState(0);

  const handleCardClick = (index) => {
    if (correctCardIndex !== null) return; // already answered

    const isCorrect = index === questions[currentQuestion].correctIndex;
    setFlipped((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });

    if (isCorrect) {
      setCorrectCardIndex(index);
      setCoins((prev) => prev + 5);
      setEarnedCoins((prev) => prev + 5);
    }
  };

const handleNext = () => {
  if (currentQuestion < questions.length - 1) {
    setCurrentQuestion((prev) => prev + 1);
    setFlipped(Array(5).fill(false));
    setCorrectCardIndex(null);
  } else {
    setProgress((prev) => Math.min(prev + 1 / 3, 1)); // ✅ Add this line
    navigate('/');
  }
};
  return (
    <div className="min-h-screen bg-indigo-50 flex inset-0 fixed flex-col items-center justify-center space-y-8 px-4">
      <Header
        className="text-5xl text-center text-indigo-700 font-semibold"
        title="Home Inspection Red Flags"
      />
       <Box>
<p className="fixed top-4 right-4 w-24 h-24 bg-indigo-400 rounded-full  font-sans shadow text-sm text-yellow-400 flex items-center justify-center">
           {coins} Coins
        </p>
      </Box>
     <div className="w-full max-w-xl">
  <div className="w-full bg-gray-300 rounded-full h-4 mt-2">
    <div
      className="bg-green-500 h-4 rounded-full transition-all duration-500"
      style={{ width: `${(currentQuestion / questions.length) * 100}%` }}

    ></div>
  </div>
  <p className="text-sm text-gray-600 mt-1 text-center">
    Question {currentQuestion + 1} of {questions.length}
  </p>
</div>

      <p className="text-xl text-gray-800 font-medium">{questions[currentQuestion].prompt}</p>

      <div className="flex flex-wrap justify-center gap-6">
        {questions[currentQuestion].answers.map((text, idx) => (
          <CircularFlashCard
            key={idx}
            frontText={text}
            backText={'Try Again'}
            isFlipped={flipped[idx]}
            isCorrect={idx === correctCardIndex}
            onClick={() => handleCardClick(idx)}
          />
        ))}
      </div>

      {correctCardIndex !== null && (
        <Button
          text={currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
          onClick={handleNext}
          className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full transition"
        />
      )}

      <Button
        text="Home"
        onClick={() => navigate('/')}
        className="mt-2 text-indigo-600 underline"
      />
    </div>
  );
}

export default Lesson3;
