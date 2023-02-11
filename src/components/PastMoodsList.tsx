import React, { useEffect, useState } from "react";
import { app } from "../firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import './PastMoodsList.css'
import  DeleteButton from './Delete'


const PastMoodsList = () => {
  const db = getDatabase(app);
  const [entries, setEntries] = useState<any[]>([]);


  
  useEffect(() => {
    const entryRef = ref(db, "/entry");

    onValue(entryRef, (snapshot) => {
      const data = snapshot.val();
      const entryArray = [];
     

      for (const key in data) {
        const entry = data[key];
  
        entryArray.push({
          id: key, 
          date: entry.date,
          note: entry.note,
          mood: entry.selectedMood,
          image: entry.selectedImg,
          BiggestAccomplishment: entry.biggestAccomplishment,
          sleep: entry.sleep
        });
      }
      setEntries(entryArray);
    });
  }, []);

  

  

  return (
    <div>
      {entries.map((entry, index) => (
        <React.Fragment key={index}>
          <div className="cardsContainer" >
            <div className="entryFormContainer">
                <div className="dateContainer">
                  {entry.date && <p>Date: {entry.date}</p>}
                </div>
                
            <div className="moodSelectionContainer">
              {entry.image && <img className="moodImg" src={entry.image.src} alt={entry.image.alt} />}
              {entry.mood && <p>{entry.mood}</p>}
            </div>
            {entry.note && <p>Note: {entry.note}</p>}
            {entry.BiggestAccomplishment && <p>Biggest Accomplishment: {entry.BiggestAccomplishment}</p>}
            {entry.sleep && <p>Sleep Quality: {entry.sleep}</p>}
              
            <button className = "deleteButton"> <DeleteButton postID={entry.id}/> </button>
            </div>
           </div>
        </React.Fragment>
      ))}
    </div>
  );
  
};

export default PastMoodsList; 