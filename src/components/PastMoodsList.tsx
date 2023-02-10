import React, { useEffect, useState } from "react";
import { app } from "../firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import './PastMoodsList.css'


const PastMoodsList = () => {
  const db = getDatabase(app);
  const [entries, setEntries] = useState<any[]>([]);


  
  useEffect(() => {
    const entryRef = ref(db, "/entry");

    onValue(entryRef, (snapshot) => {
      const data = snapshot.val();
      const entryArray = [];
      const date = new Date().toDateString();

      for (const key in data) {
        const entry = data[key];
        entryArray.push({
          date: date,
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
          <div className="formContainer">
            <p>Date: {entry.date}</p>
            <p>Note: {entry.note}</p>
            <p>Selected Mood: {entry.mood}</p>
            <img className="moodImg" src={entry.image.src} alt={entry.image.alt} />
            <p>Biggest Accomplishment: {entry.BiggestAccomplishment}</p>
            <p>Sleep Quality: {entry.sleep}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
  
};

export default PastMoodsList; 