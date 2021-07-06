import "../Styles/Breathing.css";
import audio from "../images/audio.png";
import breath from "../images/breath.png";
import guru from "../images/guru.png";
import button from "../images/button.png";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";

const useAudio = url => {
    const [audio] = useState(new Audio('https://www.mayo.edu/research/-/media/kcms/gbs/research/audio/ten-breath-practice-benzo'));
    const [playing, setPlaying] = useState(false);
  
    const toggle = () => {
        console.log('audio')
        setPlaying(!playing); }
  
    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
      [playing]
    );
  
    useEffect(() => {
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, []);
  
    return [playing, toggle];
  };

function Breathing({ url }) {

   const [playing, toggle] = useAudio(url);
    const history = useHistory();
        const imageClick = () => {
         history.push('/options')
      } 

    return (
        <div className="breathing">
            <div className="headerImages">
                <img className="headerImages1" src={guru} alt="" />
                <img className="headerImages2" src={breath} alt="" />
            </div>            
            <div className="header1">
                <h2>Breathing</h2>
            </div>
            <img onClick={toggle} className='audio' src={audio} alt="" />
            <div className="breathingPara">
                <p> This simple breathing technique makes you slow down your pace of breathing by having you apply deliberate effort in each breath.<br /><br />
                    You can practice pursed lip breathing at any time. It may be especially useful during activities such as bending, lifting, or stair 
                    climbing.<br /><br /> Practice using this breath 4 to 5 times a day when you begin in order to correctly learn the breathing pattern.<br /><br />
                    To do it:
                    </p>   
                    <ul>
                    <li>Relax your neck and shoulders.</li>
                    <li>Keeping your mouth closed, inhale slowly through your nose for 2 counts.</li>
                    <li>Pucker or purse your lips as though you were going to whistle.</li>
                    <li>Exhale slowly by blowing air through your pursed lips for a count of 4</li>
                    </ul>
            </div>
            <div className="buttonDiv">
            <img onClick={() => imageClick()} className='button2' src={button} alt="" />
            </div>
        </div>
    )
}

export default Breathing
