import React from 'react';
import "../Styles/NoStress.css";
import Confetti from 'react-dom-confetti';
import { Link } from "react-router-dom";


function NoStress() {

    const [pageLoad, setpageLoad] = React.useState(false);

    React.useEffect(() => {
        setpageLoad(true)
    }, []) 

    const config = {
      angle: 360,
      spread: 360,
      startVelocity: 40,
      elementCount: 500,
      dragFriction: 0.15,
      duration: 3000,
      stagger: 3,
      width: "10px",
      height: "10px",
      perspective: "1000px",
      colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
    };

    const smiley = '\uD83D\uDE00';

    return (
      <div className="noStress">
      <div className='confetti-top' >
            <Confetti active={pageLoad} config={config} />
            <Confetti active={pageLoad} config={config} />
            </div> 
             <h3>Hooray !!! You are not stressed</h3>
             <h3>{smiley}</h3>
             <p>Go out smile and enjoy the rest of your day</p>
             <Link style={{ fontSize: '24px', fontFamily: 'cursive', color:'red'}} to='/home'>Back to Home</Link>
             <Link style={{ fontSize: '24px', fontFamily: 'cursive', color:'red'}} to='/hr-tracker'>Heart Rate Tracker</Link>
            <div className='confetti-bottom' >
            <Confetti active={pageLoad} config={config} />
          </div>´    
        </div>
    )
}

export default NoStress 
