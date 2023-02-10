import './WishUpon.css'


export default function WishUpon() {
    return (
      <div>
        <h1>Happiness is Just a teardrop away</h1>

        <div className = "imgContainer">
        <img
                    className='happiness'
                    src={process.env.PUBLIC_URL + "/assets/happiness.png"}
                    alt="Happiness is a teardrop away"
                />
                 <img
                    className='fairygodmother'
                    src={process.env.PUBLIC_URL + "/assets/fairygodmother.png"}
                    alt="Happiness is a teardrop away"
                />

<img
                    className='teardrop'
                    src={process.env.PUBLIC_URL + "/assets/teardrop.png"}
                    alt="Happiness is a teardrop away"
                />
                
       

        </div>

      <p>
        BetterHelp: <a href="url">https://www.betterhelp.com/</a>
      </p>
      <p>
        Talkiatry: <a href="url">https://www.talkiatry.com/</a>
      </p>

      <p>
      In crisis and need to talk to someone?
      Text HOME to 741741 to reach a volunteer Crisis Counselor.


      </p>

      <h1>You're not alone</h1>
      <img
                    className='friends'
                    src={process.env.PUBLIC_URL + "/assets/friends.png"}
                    alt="friends"
                />


      </div>
    );
  }