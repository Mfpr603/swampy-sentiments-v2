import React from 'react';

import './App.css';
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import PussinMoods from './pages/PussinMoods';
import SwampyHome from './pages/SwampyHome';
import WishUpon from './pages/WishUpon';
import GingysGrumpometer from './pages/GingysGrumpometer';

function App() {
  return (
    <div className="App">
      <div className="navBar">
        <NavBar />
        </div>
       
      

          <Routes>
            <Route path="/" element={<SwampyHome/>} />
            <Route path="/WishUponWellness" element={<WishUpon/>} />
            <Route path='/pussinmoods' element={<PussinMoods />} />
            <Route path='/gingysgrumpometer' element={<GingysGrumpometer />} />
          </Routes>
     
      


    </div>

  );
}

export default App;
