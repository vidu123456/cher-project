import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Lesson1 from './Lesson1';
import Lesson2 from './Lesson2';
import Lesson3 from './Lesson3';
import Celebration from './Celebration';
function App() {
  const [coins, setCoins] = useState(0);
  const [progress, setProgress] = useState(0)
  return (
    
   <Router>
      <Routes>
        <Route path="/" element={<Home coins={coins} setCoins={setCoins}  progress = {progress} setProgress={setProgress}/>} />
        <Route path="/Lesson1" element={<Lesson1 coins={coins} setCoins={setCoins} progress = {progress} setProgress={setProgress}/>} />
        <Route path="/Lesson2" element={<Lesson2 coins={coins} setCoins={setCoins} progress = {progress} setProgress={setProgress} />} />
        <Route path="/Lesson3" element={<Lesson3 coins={coins} setCoins={setCoins} progress = {progress} setProgress={setProgress} />} />
        <Route path="/Celebration" element={<Celebration coins={coins} setCoins={setCoins}  />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
    
  );
  
}

export default App