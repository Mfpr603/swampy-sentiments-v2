import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import  About  from "./pages/About";
import  Contact from "./pages/Contact";
import Home  from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

    </div>
  );
}

export default App;
