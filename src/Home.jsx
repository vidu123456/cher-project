import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Button from './Button';
import Box from './Box';
import Lesson1 from './Lesson1';
import Lesson2 from './Lesson2';
import Lesson3 from './Lesson3';
import Celebration from './Celebration'; // Correct casing

function Home({ coins, setCoins ,progress, setProgress}) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-400 fixed inset-0">
      
      <Box>
        <p className="fixed top-4 right-4 w-24 h-24 bg-indigo-500  font-sans rounded-full shadow text-sm text-yellow-400 flex items-center justify-center">
           {coins} Coins
        </p>
      </Box>

     
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
        <Box className="w-[800px] h-[500px] bg-indigo-500 rounded shadow pt-30 flex flex-col items-center space-y-6">
          <Header
            className="text-7xl mb-15 whitespace-pre-line text-center text-white  italic font-serif "
            title={`Understanding Home\nInspections`}
            subtitle=""
          />
          <div className="flex space-x-6">
            <Button
              text="Lesson 1"
              onClick={() => navigate('/Lesson1')}
              className="px-4 py-4  bg-yellow-600 rounded-full transition-all duration-300 hover:scale-105 hover:bg-yellow-500 hover:text-white hover:shadow-md"
            />
            <Button
              text="Lesson 2"
              onClick={() => navigate('/Lesson2')}
              className="px-4 py-4  bg-yellow-600 rounded-full transition-all duration-300 hover:scale-105 hover:bg-yellow-500 hover:text-white hover:shadow-md"
            />
            <Button
              text="Lesson 3"
              onClick={() => navigate('/Lesson3')}
              className="px-4 py-4  bg-yellow-600 rounded-full transition-all duration-300 hover:scale-105 hover:bg-yellow-500 hover:text-white hover:shadow-md"
            />
           
          </div>
         <div className="w-[600px] h-6 bg-gray-200 rounded-full overflow-hidden mt-auto mb-6">
  <div
    className="h-full bg-yellow-400 transition-all duration-500"
    style={{ width: `${Math.min(progress || 0, 1) * 100}%` }}
  />
</div>
        </Box>
        {progress >= 1 && (
  <>
    <p className="text-xl font-semibold text-white mt-4">Collect Your Prize!</p>
    <Button
      text="PRIZE"
      onClick={() => navigate('/Celebration')}
      className="px-4 py-4 bg-yellow-600 rounded-full transition-all duration-300 hover:scale-105 hover:bg-yellow-500 hover:text-white hover:shadow-md"
    />
  </>
)}
      </div>
    </div>
  );
}

export default Home;
