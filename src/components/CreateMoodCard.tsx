import React, { useState } from "react";
import { app } from "../firebase";
import { getDatabase, ref, push, set } from 'firebase/database'
import './CreateMoodCard.css'
import CurrentDate from "./Date";
// import SpotifySongSelection from './SpotifySongSelection';
// import SongSelection from './SongSelection';


interface CreateMoodCardProps {
  closeModal: (arg: boolean) => void;
  selectedMood: string;
  selectedImg: {
    src: string;
    alt: string;
    };
}

function CreateMoodCard({ closeModal, selectedMood, selectedImg }: CreateMoodCardProps): JSX.Element {
  
   {
    
  const db = getDatabase(app);
  const [note, setNote] = useState("");
  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const addEntry = () => {
    const date = new Date().toDateString(); // Use the date string as the key
    const entryRef = ref(db, `/entry/`); // Use the date string as the key in the ref
    const entry = {
      date,
      note,
      selectedMood,
      selectedImg
    };
    push(entryRef, entry); // Use set instead of push to set the value at the key
  };



  return (
  <div className="formBackground">
     <div className="formContainer">
        <form>
          <div className= "closeButton">
            <button type="button" onClick={() => closeModal(false)}>X</button>
          </div>
          <div className= "Date">
            <CurrentDate />
          </div>

          <div className= "noteInput">
            <h1 >Your Note:</h1>
          </div>
          <div className= "textInput">
              <input type="text"  placeholder="Add a note..." onChange={handleSubmit} />
          </div>
          <div className= "selectedMood">
              
                <div className="moodImgBox">
                  <img className = 'moodImg' src={selectedImg.src} alt={selectedImg.alt} />
                </div>
                <div className = "selectedMoodTitle">{selectedMood}</div>
          </div>
          <div className = "footer">
            <div className = "submitButton">
              <button type="button" onClick={addEntry}> Save </button>
            </div>
          </div>
          
        </form>
    </div>
  </div>
  );
};}

export default CreateMoodCard;
