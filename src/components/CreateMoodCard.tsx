import React, { useState } from "react";
import { app, auth} from "../firebase";
import { getDatabase, ref, push} from 'firebase/database'
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

  // const [note, setNote] = useState("");
  // const [biggestAccomplishment, setBiggestAccomplishment] = useState("");

  const sleepOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [formData, setFormData] = useState({
    note: "",
    biggestAccomplishment: "",
    grateful: "",
    sleep: 0
  })

  const handleChange = (e: any) => {
    setFormData(prevData => {
      return {
        ...prevData,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSleepChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData(prevData => {
      return {
        ...prevData,
        sleep: Number(event.target.value)
      }
    });
  };
  


  const addEntry = () => {
    const date = new Date().toDateString(); // Use the date string as the key
    const user = auth.currentUser;
    if (user) {
      const uid = user.uid;
    const entryRef = ref(db, `/entry/${uid}`);
    
    
    const entry = {
      ...formData,
      date,
      selectedImg,
      selectedMood
    }
    var newPostRef = push(entryRef, entry);
    var postID = newPostRef.key;
    console.log(postID); // Use set instead of push to set the value at the key
  };}

console.log(formData)

  return (
  <div className="formBackground">
     <div className="CreateFormContainer">
        <form>
          <div className= "closeButton">
            <button type="button" onClick={() => closeModal(false)}>X</button>
          </div>
          <div className= "Date">
            <CurrentDate />
          </div>
          <div className= "selectedMood">
                <div className="moodImgBox">
                  <img className = 'moodImg' src={selectedImg.src} alt={selectedImg.alt} />
                </div>
                <div className = "selectedMoodTitle">{selectedMood}</div>
          </div>

          <div className= "noteInput">
            <h1 >Your Note:</h1>
          </div>
          <div className= "textInput">
              <input type="text"  placeholder="Add a note..." name="note" value={formData.note} onChange={handleChange} />
          </div>

          <div className= "accomplishmentInput">
            <h1 >Biggest Accomplishment:</h1>
          </div>
          <div className= "textInput">
              <input type="text"  placeholder="Biggest Accomplishment" name="biggestAccomplishment" value={formData.biggestAccomplishment} onChange={handleChange}/>
          </div>

          <div className= "gratefulInput">
            <h1 >I'm grateful for:</h1>
          </div>
          <div className= "textInput">
              <input type="text"  placeholder="Grateful for" name="grateful" value={formData.grateful} onChange={handleChange}/>
          </div>

          
          <div className= "sleepInput">
              <h1 >Sleep Quality:</h1>
              <select onChange={handleSleepChange} value={formData.sleep}>
              <option value="">Please select...</option>
              {sleepOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
              ))}
              </select>
          </div>


          <div className = "footer">
            <div className = "submitButton">
              <button type="button" onClick={addEntry} > Save </button>
            </div>
          </div>
          
        </form>
    </div>
  </div>
  );
};}

export default CreateMoodCard;
