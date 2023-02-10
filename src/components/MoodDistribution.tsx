import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { app } from "../firebase";
import 'chart.js';
import { getDatabase, ref, onValue } from "firebase/database";


interface Mood {
  selectedMood: string;
  note?: string;
  selectedImg?: string;
  [key: string]: any;
}

const MoodDistributionChart = () => {
  const db = getDatabase(app);
  const [moodData, setMoodData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
    
    const entryRef = ref(db, "/entry");      
    onValue(entryRef, (snapshot) => {
        const data = snapshot.val();
        const moodCount: { [key: string]: number } = {};
        Object.values(data).forEach((value: unknown) => {
            if (value && typeof value === 'object') {
              const mood = value as Mood;
          if (!moodCount[mood.selectedMood]) {
            moodCount[mood.selectedMood] = 0;
          }
          moodCount[mood.selectedMood] += 1;
        }});
        setMoodData(moodCount);
      });
    };
    fetchData();

  });

  


  const chartData = {
    labels: Object.keys(moodData) as string[],
    datasets: [
      {
        data: Object.values(moodData) as number[],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#CC6699',
          '#99CC66',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#CC6699',
          '#99CC66',
        ],
      },
    ],
  };


//   const chartId = `chart-${Date.now()}-${Math.floor(Math.random() * 100)}`;

//   const chart = new Chart(chartId, {
//     type: 'bar',
//     data: chartData,
//   });

//   chart.destroy();

  return (
    <div>
      <Pie data={chartData} />
    </div>
  );
};

export default MoodDistributionChart;
