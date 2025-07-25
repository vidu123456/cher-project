import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Header from './Header';
import Button from './Button';
import Box from './Box';
import IndexCard from './IndexCard';


function Lesson2({ coins, setCoins ,progress, setProgress}) {
    const navigate = useNavigate();
    const questions = [{text: "A general home inspection typically covers the electrical, plumbing, HVAC, and structural systems." ,options:["True","False"],correctIndex: 0}
    ,{text: "Pest inspections only look for termites." ,options:["True","False"],correctIndex: 1},
    {text: "Mold inspections can detect invisible mold spores." ,options:["True","False"],correctIndex: 0}
    ,{text: "Well water inspections test for bacteria and chemicals." ,options:["True","False"],correctIndex: 0}]
     const [currentIndex, setCurrentIndex] = useState(0);
     const [selected, setSelected] = useState(null);
    const [answered, setAnswered] = useState(false);
     const currentQuestion = questions[currentIndex];

    const handleAnswer = (answer) => {
        setSelected(answer);
        setAnswered(true);
        if(answer === currentQuestion.correctIndex){
            setCoins(coins+5);
        }
        
    };
    const handleNext = () => {
    setSelected(null);
    setAnswered(false);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } 
     };
 return(
 <div className="min-h-screen flex flex-col items-center inset-0  fixed justify-center bg-indigo-300"> 
    <Box>
<p className="fixed top-4 right-4 w-24 h-24 bg-indigo-400 rounded-full  font-sans shadow text-sm text-yellow-400 flex items-center justify-center">
           {coins} Coins
        </p>
      </Box>
    <Header className="text-6xl mb-15 whitespace-pre-line text-center text-indigo-500" 
    title={`Different Types of Home Inspections`} subtitle= {`True or False Quiz`}/>
    <div className="w-[600px] h-4 bg-gray-200 rounded-full overflow-hidden mb-6">
  <div
    className="h-full bg-indigo-500 transition-all duration-500"
    style={{ width: `${((currentIndex + (answered ? 1 : 0)) / questions.length) * 100}%` }}
  />
</div>
     <div className="text-white rounded-full shadow-2xl w-96 h-96 flex flex-col items-center justify-center text-center p-6 bg-indigo-400 ">
        <p className="text-lg font-semibold mb-6">{currentQuestion.text}</p> 
      <div className="flex justify-center gap-6">
          <button
            onClick={() => handleAnswer(0)}
            disabled={answered}
            className={`py-2 px-4 rounded border text-white ${
              selected === 0
                ? currentQuestion.correctIndex === 0
                  ? 'bg-green-400 text-white'
                  : 'bg-red-400 text-white'
                : 'bg-indigo-300 hover:bg-indigo-300'
            } transition`}
          >
            True
          </button>
          <button
            onClick={() => handleAnswer(1)}
            disabled={answered}
            className={`py-2 px-4 rounded border text-white  ${
              selected === 1
                ? !currentQuestion.Index === 1
                  ? 'bg-green-400 text-white'
                  : 'bg-red-400 text-white'
                : 'bg-indigo-300 hover:bg-indigo-300'
            } transition`}
          >
            False
          </button>
        </div>
        {answered && currentIndex < questions.length - 1 && 
          <Button
            text = "Next"
            onClick={handleNext}
            className="mt-6 py-2 px-6 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
         />
            
         
        }
        {answered && currentIndex === questions.length-1 &&
            <Button text = "Done"
            onClick={() => 
                {setProgress(prev => Math.min(prev + 1/3, 1));
                navigate('/');}
            }
            className="mt-6 py-2 px-6 bg-blue-500 text-white rounded hover:bg-blue-600 transition"/>
        }

        </div>
       <Button text = "Home"
            onClick={() => 
                
                navigate('/')
            }
            className="mt-6 py-2 px-6 bg-blue-500 text-white rounded hover:bg-blue-600 transition"/>  
 </div>

 );
}

export default Lesson2;