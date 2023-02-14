import React from 'react';

import './App.css';
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import PussinMoods from './pages/PussinMoods';
import SwampyHome from './pages/SwampyHome';
import WishUpon from './pages/WishUpon';
import GingysGrumpometer from './pages/GingysGrumpometer';
import LoginPage from './pages/LoginPage';
import { useState, useEffect } from "react";
import { auth } from "./firebase";
import { User } from 'firebase/auth';


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
        <div className="navBar">
          <NavBar />
        </div>
      )}

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Home" element={<SwampyHome displayName={user ? user.displayName || "" : ""} />} />
        <Route path="/WishUponWellness" element={<WishUpon />} />
        <Route path="/pussinmoods" element={<PussinMoods />} />
        <Route path="/gingysgrumpometer" element={<GingysGrumpometer />} />
      </Routes>
    </div>
  );
}

export default App; 