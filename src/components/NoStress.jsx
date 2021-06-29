import React from 'react';
import "../Styles/NoStress.css";
import Confetti from 'react-dom-confetti';


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

    return (
        <div>
            <div className='confetti-top' >
            <Confetti active={pageLoad} config={config} />
            <Confetti active={pageLoad} config={config} />
            </div>
             <div className="noStress">
             <h3>No stress - add confetti</h3>
             </div>
            <div className='confetti-bottom' >
            <Confetti active={pageLoad} config={config} />
          </div>´    
        </div>
    )
}

export default NoStress 
