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
        const reversedEntryArray = entryArray.reverse();
        setEntries(reversedEntryArray);
        // console.log("reversed order", reversedEntryArray)
      });
    }
    
  }, []);

  return (
    <div>
      {entries.map((entry, index) => (
        <React.Fragment key={index}>
          <div className="cardsContainer">
            <div className="entryFormContainer">
              <div className="dateAndMoodContainer">
              <div className="dateContainer">
                {entry.date && <p>{entry.date}</p>}
                <div className = "noteAndSleep">
                <div className="noteContainer">
                  {entry.note && <p className = "Cardtext" >Note: {entry.note}</p>}
                  </div>

                <div className="sleepContainer">
                  {entry.sleep && <p className = "Cardtext" >Sleep Quality: {entry.sleep}</p>}
                </div>
              </div>
              </div>
              <div className="moodSelectionContainer">
                  {entry.image && <img className="moodImg" src={entry.image.src} alt={entry.image.alt} />}
                  {entry.mood && <p className = "moodSelectionTitle">{entry.mood}</p>}

                </div>
                </div>
              
               
                
           
              
              <div className = "bottomContainer">
              <div className="AccomplishmentAndGrateful">
              {entry.BiggestAccomplishment && <p className = "Cardtext" >Biggest Accomplishment: {entry.BiggestAccomplishment}</p>}
              {entry.Grateful && <p className = "Cardtext" >I'm grateful for: {entry.Grateful}</p>}
              </div>
              
              
            </div>
            <div className = "deleteButtonForm">
            {entry.id && <button className="deleteButton">
               <DeleteButton postID={entry.id} />
              </button>}
            </div>
          </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default PastMoodsList;
