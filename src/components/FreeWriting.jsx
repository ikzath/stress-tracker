import "../Styles/Breathing.css";
import exercise from "../images/exercise.png";
import guru from "../images/guru.png";
import writing from "../images/writing.png";
import button from "../images/button.png";
import { useHistory } from "react-router-dom";

function Breathing() {
   
    const history = useHistory();
        const imageClick = () => {
         history.push('/options')
      } 

    return (
        <div className="breathing">
            <div className="headerImages">
                <img className="headerImages1" src={guru} alt="" />
                <img className="headerImages2" src={writing} alt="" />
            </div>            
            <div className="header1">
                <h2>Free-Writing</h2>
            </div>
            <img className='audio' src={exercise} alt="" />
            <div className="breathingPara">
                <p>You may think it sounds dramatic, but it can actually be quite therapeutic to pour your feelings out onto the page. 
                So many of us live our lives for other people—we bite our tongues, bottle up emotions, and stifle thoughts so as to be 
                as amenable and please as many people as humanly possible, and in the process, we can lose ourselves.<br /><br />
                Are you upset, pissed off, distraught, terrified, ecstatic, euphoric? When journaling, allow yourself to feel your feelings, 
                and feel them at full volume. This demands acknowledging emotions or thoughts that you may be embarrassed or even afraid to address.<br /><br />
                Think of it as the equivalent of screaming into a pillow or hitting a punching bag. When we spend so much of our day holding back for other people, 
                it’s important to release our feelings, however ugly they might be. With the “spill your guts” exercise, you’ll find that you harbor less tension, resentment, 
                or misguided anger because you’ve actually granted yourself the space to let it out. You may even find yourself writing down feelings you weren’t even aware you were experiencing. Remember, you’re human. It’s okay to be upset—give yourself permission to feel the full range of your emotions. 
                </p>
            </div>
            <div className="buttonDiv2" style={{ marginTop: '300px'}}>
            <img onClick={() => imageClick()} className='button2' src={button} alt="" />
            </div>
        </div>
    )
}

export default Breathing
