import MoodDistributionChart from '../components/MoodDistribution';
import AvgSleep from '../components/AvgSleep';

export default function GingysGrumpometer() {
    return (
      <div>
        <h1 className = "MDtext">Mood Distribution</h1>
        <MoodDistributionChart/>
        <AvgSleep/>


      </div>
    );
  }