import React from 'react';
// import logo from './logo.svg';
import './App.css';
import CurrentDate from './components/Date';
import Moods from './components/Moods';
import PastMoodsList from './components/PastMoodsList';
import { Routes, Route } from "react-router-dom";
import  About  from "./pages/About";
import  Contact from "./pages/Contact";
import Home  from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import { NavBar } from "./components/NavBar";
import PussinMoods from './pages/PussinMoods';

function App() {
  return (
    <div className="App">
       <NavBar />
      <h1 className='Swampy'>Swampy Sentiments</h1>
        <div className='currentDate'>
          < CurrentDate />

        </div>
         {/* <NavBar />  */}
        <img
                className='layers'
                src={process.env.PUBLIC_URL + "/assets/layers.png"}
                alt="Ogres have layers"
            />

<h1 className='Header'>Which layer are you feeling today?</h1>
        <Moods/>
        {/* <PastMoodsList/> */}
        {/* <MoodDistributionChart/> */}


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/pussinmoods' element={<PussinMoods />} />
        </Routes>

    </div>

  );
}

export default App;
