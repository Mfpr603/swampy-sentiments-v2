import React from 'react';

import './App.css';
import { Routes, Route } from "react-router-dom";
import { NavBar2 } from "./components/NavBar2";

import PussinMoods from './pages/PussinMoods';
import SwampyHome from './pages/SwampyHome';
import WishUpon from './pages/WishUpon';
import GingysGrumpometer from './pages/GingysGrumpometer';
import LoginPage from './pages/LoginPage';
import { useState, useEffect } from "react";
import { auth } from "./firebase";
import { User } from 'firebase/auth';
import Logout from "./components/Logout";



function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      
      {user !== null && (

        <React.Fragment>
        <div>
          <Logout/> 
        </div>

        
        <div className="navBar2">
        
          <NavBar2 />
        </div>
        </React.Fragment>
      )}

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Home" element={<SwampyHome displayName={user ? user.displayName || "" : ""} />} />
        <Route path="/WishUponWellness" element={<WishUpon />} />
        <Route path="/pussinmoods" element={<PussinMoods />} />
        <Route path="/gingysgrumpometer" element={<GingysGrumpometer />} />
      </Routes>

      <footer>
      <p className = "CopyRight">  "All rights reserved, just like Fiona's heart" - © Shrek</p>
    </footer>

    </div>

    
  );
}

export default App; 