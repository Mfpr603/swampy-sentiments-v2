import React, { useEffect, useState } from "react";
import { app, auth } from "../firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import './PastMoodsList.css';
import DeleteButton from './Delete';

const PastMoodsList = () => {
  const db = getDatabase(app);
  const [entries, setEntries] = useState<any[]>([]);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const uid = user.uid;
      const entryRef = ref(db, `/entry/${uid}`);

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
            Grateful: entry.grateful,
            sleep: entry.sleep
          });
        }

        setEntries(entryArray);
      });
    }
  }, []);

  return (
    <div>
      {entries.map((entry, index) => (
        <React.Fragment key={index}>
          <div className="cardsContainer">
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
              {entry.Grateful && <p>I'm grateful for: {entry.Grateful}</p>}
              {entry.sleep && <p>Sleep Quality: {entry.sleep}</p>}
              
              {entry.id && <button className="deleteButton">
  <DeleteButton postID={entry.id} />
</button>}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default PastMoodsList;
