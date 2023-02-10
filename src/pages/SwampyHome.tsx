import CurrentDate from "../components/Date";
import Moods from "../components/Moods";


export default function SwampyHome() {
    return (
    <div>
        <h1 className='Swampy'>Swampy Sentiments</h1>
        <div className='currentDate'>
          < CurrentDate />

        </div>
        <img
                className='layers'
                src={process.env.PUBLIC_URL + "/assets/layers.png"}
                alt="Ogres have layers"
            />
            <h1 className='Header'>Which layer are you feeling today?</h1>
            <Moods/>            
           
        </div>
    );
  }




