import React, { useState } from "react";
import { app } from "../firebase";
import { getDatabase, ref, push, set } from 'firebase/database'
import './CreateMoodCard.css'
import CurrentDate from "./Date";



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
  const [biggestAccomplishment, setBiggestAccomplishment] = useState("");
  const [sleep, setSleep] = useState("");

  const sleepOptions = ['slept like a baby', 'good', 'meh', 'bad', 'awful'];



  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const handleSubmitAccomplishment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBiggestAccomplishment(e.target.value);
  };

  const handleSleepChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSleep(event.target.value);
  };
  


  const addEntry = () => {
    const date = new Date().toDateString(); // Use the date string as the key
    const entryRef = ref(db, `/entry/`); // Use the date string as the key in the ref
    const entry = {
      date,
      note,
      selectedMood,
      selectedImg,
      biggestAccomplishment,
      sleep
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

          <div className= "accomplishmentInput">
            <h1 >Biggest Accomplishment:</h1>
          </div>
          <div className= "textInput">
              <input type="text"  placeholder="Biggest Accomplishment" onChange={handleSubmitAccomplishment}/>
          </div>

          <div className= "selectedMood">
                <div className="moodImgBox">
                  <img className = 'moodImg' src={selectedImg.src} alt={selectedImg.alt} />
                </div>
                <div className = "selectedMoodTitle">{selectedMood}</div>
          </div>
          <div className= "sleepInput">
              <h1 >How did you sleep?</h1>
              <select onChange={handleSleepChange} value={sleep}>
              <option value="">Please select...</option>
              {sleepOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
              ))}
              </select>
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
