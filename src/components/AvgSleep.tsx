import React, { useState, useEffect } from 'react';
import { app, auth } from "../firebase";
import { getDatabase, ref, onValue } from "firebase/database";

const AvgSleep = () => {
    const [sleepData, setSleepData] = useState({ averageSleep: 0 });
  
    useEffect(() => {
      const fetchData = async () => {
        const db = getDatabase(app);
        const user = auth.currentUser;
          if (user) {
        const uid = user.uid;

        const sleepRef = ref(db, `/entry/${uid}`);
        
  
        onValue(sleepRef, (snapshot) => {
          const data = snapshot.val();
          console.log("Data:", data);
          const sleepArray = [];
          for (const key in data) {
            const entry = data[key];
            console.log(key);
            sleepArray.push({ sleep: entry.sleep });
          }
          const sleepCount = sleepArray.reduce((acc, cur) => {
            return acc + cur.sleep;
          }, 0);
          console.log("Sleep Count:", sleepCount);
          const averageSleep = sleepCount / sleepArray.length;
          console.log("Average Sleep:", averageSleep);
          setSleepData({ averageSleep });
        });
      };}
  
      fetchData();
    }, []);
  
    return (
      <div>
        <h1>Average Sleep Quality:</h1>
        <h2>{sleepData.averageSleep}</h2>
      </div>
    );
  };
  

  export default AvgSleep; 