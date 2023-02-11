import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { app } from "../firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import './MoodDistribution.css'

const MoodDistributionChart = () => {
  const [moodData, setMoodData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase(app);
      const moodRef = ref(db, `/entry/`);

      onValue(moodRef, (snapshot) => {
        const data = snapshot.val();
        console.log("Data:", data);
        const moodArray = [];
        for (const key in data) {
          const entry = data[key];
          console.log(key);
          moodArray.push({ mood: entry.selectedMood });
        }
        const moodCount = moodArray.reduce((acc, cur) => {
          acc[cur.mood] = (acc[cur.mood] || 0) + 1;
          return acc;
        }, {} as {[key: string]: number});
        setMoodData(moodCount);
      });
    };
    fetchData();
  }, []);

  const chartOptions = {
    
    chart: {
      type: 'pie',
      styledMode: true
    },
    title: {
      text: 'Mood Distribution'
    },
    colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00'], // Set specific colors for each mood
    series: [{
      name: 'Mood',
      data: Object.entries(moodData).map(([mood, count]) => ({name: mood, y: count}))
    }]
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default MoodDistributionChart;
