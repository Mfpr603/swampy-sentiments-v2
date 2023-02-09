import React, { useEffect, useState } from "react";
import { app } from "../firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import DeleteButton from "./Delete";



const PastMoodsList = () => {
  const db = getDatabase(app);
  const [entries, setEntries] = useState<any[]>([]);

  
  useEffect(() => {
    const entryRef = ref(db, "/entry");

    onValue(entryRef, (snapshot) => {
      const data = snapshot.val();
      const entryArray = [];
      const date = new Date().toDateString();

    //Use the `useEffect` hook to call the `onValue` function
    // Pass `entryRef` and an anonymous function to `onValue` as arguments
      // - Inside the anonymous function, declare a constant `data` that stores the result of calling the `val` method on the `snapshot` object
      // - Declare an empty array named `entryArray`
      // - Use a `for...in` loop to iterate over the `data` object
      //   - For each iteration, declare a constant `entry` that stores the value of `data[key]`
      //   - Push an object that contains the `date`, `note`, `mood`, and `image` properties onto the `entryArray` array
      //onValue() function: The onValue() function is called and passed two arguments: the reference to the "/entry" node and a callback function. The onValue() function listens to changes to the "/entry" node in the database.
     
      for (const key in data) {
        const entry = data[key];
        entryArray.push({
          key: entry.key,
          note: entry.note,
          mood: entry.selectedMood,
          image: entry.selectedImg
        });
      }
      setEntries(entryArray);
    });
  }, []);

  // const sortedByDate = entries.sort((a,b) => {
  //   return b.date - a.date;
  // });
  //   console.log("THIS IS THE SORTED sortedByDate)

  // The callback function: When there is a change to the "/entry" node, the callback function is called and 
  // passed a snapshot of the data.

  // Processing the data: The data from the snapshot is extracted and stored in a variable "data". 
  // An array "entryArray" is declared and will be used to store the processed entries.
  // The for-in loop is used to loop through the properties of the "data" object. For each iteration 
  // of the loop, a new object is created and stored in the "entryArray". The new object 
  // has four properties: "date", "note", "mood", and "image". The "date" property is the key of the entry, "note" is the note property of the entry, "mood" 
  // is the selectedMood property of the entry, and "image" is the selectedImg property of the entry.

   
  

  return (
    <div>
      {entries.map((entry, index) => (
        <div key={index}>
          <p>Date: {entry.date}</p>
          <p>Note: {entry.note}</p>
          <p>Selected Mood: {entry.mood}</p>
          <img src={entry.image.src} alt={entry.image.alt} />
          <DeleteButton/>
        </div>
      ))}
    </div>
  );
};
// The component returns a div with the list of entries. For each entry, a div is created with the key,
//  date, note, mood, and image of the entry. The map() function is used to loop through the entries and render the div for each entry.



export default PastMoodsList; 