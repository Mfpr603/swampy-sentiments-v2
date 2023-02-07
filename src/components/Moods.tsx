import './Mood.css'
import React, { useState } from "react";
import CreateMoodCard from "./CreateMoodCard";


function Moods() {
    const [showForm, setShowForm] = useState(false);
    const [selectedMood, setSelectedMood] = useState("");
    const [selectedImg, setSelectedImg] =  useState<{ src: string, alt: string }>({src: "", alt: ""});

    

  return (
    <div className='moodContainer'>
        <div className='happyContainer'>
            <button onClick={() => {
            setShowForm(true);
            setSelectedMood("Happy");
            setSelectedImg({
                src: process.env.PUBLIC_URL + "/assets/happy.png",
                alt: "Happy Shrek"
            });
          }}>
                <img
                    className='happy'
                    src={process.env.PUBLIC_URL + "/assets/happy.png"}
                    alt="Happy Shrek"
                />
            </button>
            <h1 className='moodHeader'>Happy</h1>
        </div>
        
        <div className='contentContainer'>
            <button onClick={() => {
            setShowForm(true);
            setSelectedMood("Content");
            setSelectedImg({
                src: process.env.PUBLIC_URL + "/assets/content.png",
                alt: "Content Shrek"
    
            });
          }}>
                <img
                    className='content'
                    src={process.env.PUBLIC_URL + "/assets/content.png"}
                    alt="Content Fiona"
                />
            </button>
            <h1 className='moodHeader'>Content</h1>
        </div>
        <div className='inLoveContainer'>
            <button onClick={() => {
            setShowForm(true);
            setSelectedMood("in Love");
            setSelectedImg({
                src: process.env.PUBLIC_URL + "/assets/inlove.png",
                alt: "in Love Puss in Boots"
            });
          }}>
                <img
                    className='inLove'
                    src={process.env.PUBLIC_URL + "/assets/inlove.png"}
                    alt="in Love Puss in Boots"
                />
            </button>
            <h1 className='moodHeader'>In Love</h1>
        </div>
        <div className='mehContainer'>
            <button onClick={() => {
            setShowForm(true);
            setSelectedMood("Meh");
            setSelectedImg({
                src: process.env.PUBLIC_URL + "/assets/meh.png",
                alt: "meh Donkey"
            });
          }}>
                <img
                    className='meh'
                    src={process.env.PUBLIC_URL + "/assets/meh.png"}
                    alt="meh Donkey"
                />
            </button>
            <h1 className='moodHeader'>Meh</h1>
        </div>
        <div className='awfulContainer'>
            <button onClick={() => {
            setShowForm(true);
            setSelectedMood("Awful");
            setSelectedImg({
                src: process.env.PUBLIC_URL + "/assets/awful.png",
                alt: "awful gingy"
            });
          }}>
                <img
                    className='awful'
                    src={process.env.PUBLIC_URL + "/assets/awful.png"}
                    alt="awful gingy"
                />
            </button>
            <h1 className='moodHeader'>Sad</h1>
        </div>

        <div className='angryContainer'>
            <button onClick={() => {
            setShowForm(true);
            setSelectedMood("Angry");
            setSelectedImg ({
                src: process.env.PUBLIC_URL + "/assets/angry.png",
                alt: "angry farquad"
            });
          }}>
                <img
                    className='angry'
                    src={process.env.PUBLIC_URL + "/assets/angry.png"}
                    alt="angry farquad"
                />
            </button>
            <h1 className='moodHeader'>Angry</h1>
        </div>
        {showForm && (
            <CreateMoodCard closeModal = {setShowForm} selectedMood={selectedMood} selectedImg={selectedImg}/>
        )}
    </div>
    
  );
}

export default Moods;
