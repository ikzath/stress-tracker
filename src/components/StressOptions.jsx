import "../Styles/StressOptions.css";
import { useHistory } from "react-router-dom";
import button from "../images/button.png";
import guru from "../images/guru.png";


function StressRelief() {

    const history = useHistory();

    function clickHandler(){
        history.push('/stress-time')
    }

    function clickHandler2(){
        history.push('/stress-time')
    }

    const imageClick = () => {
        history.push('/stress')
       } 

    return (
        <div className='stress'>
            <div className="headerImages">
                <img className="headerImages1" src={guru} alt="" />
            </div>   
            <div>
            <p style={{ marginBottom: '30px', marginLeft: '-115px'}} className='stressLabel'>How much time do you <br />currently have to relax?</p>
            </div>  
          <div style={{ marginBottom: '30px'}} className="userInput">
              <button onClick={clickHandler} className='userInputText'>A few minutes</button>
              <button onClick={clickHandler2} className='userInputText'>A bit of time</button>
              <button className='userInputText'>A lot of time</button>
          </div>
              <img style={{ marginTop: '-95px'}} onClick={() => imageClick()} className='buttonBack' src={button} alt="" />
        </div>
    )
}

export default StressRelief
 