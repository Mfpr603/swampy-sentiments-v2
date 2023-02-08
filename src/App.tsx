import React from 'react';

import './App.css';
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import PussinMoods from './pages/PussinMoods';
import SwampyHome from './pages/SwampyHome';
import WishUpon from './pages/WishUpon';

function App() {
  return (
    <div className="App">
       <NavBar />
      
        <Routes>
          <Route path="/" element={<SwampyHome/>} />
          <Route path="/WishUponWellness" element={<WishUpon/>} />
          <Route path='/pussinmoods' element={<PussinMoods />} />
        </Routes>

    </div>

  );
}

export default App;
