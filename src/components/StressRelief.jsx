import "../Styles/StressRelief.css";
import { useHistory } from "react-router-dom";
import button from "../images/button.png";
import guru from "../images/guru.png";


function StressRelief() {

    const history = useHistory();

    function clickHandler(){
        history.push('/breathing')
    }

    function clickHandler2(){
        history.push('/free-writing')
    }

    const imageClick = () => {
        history.push('/options')
       } 

    return (
        <div className='stress'>
            <div className="headerImages">
                <img className="headerImages1" src={guru} alt="" />
            </div>     
          <p className='stressLabel' style={{ marginLeft: '-10px'}} >If you have a few minutes, please <br /> choose one of the following <br />techniques</p>
          <div style={{ marginBottom: '120px'}} className="userInput">
              <button onClick={clickHandler} className='userInputText'>Breathing</button>
              <button onClick={clickHandler2} className='userInputText'>Free-Writing</button>
              <button className='userInputText'>Strecthing</button>
              <button className='userInputText'>Drink water</button>
              <button className='userInputText'>Eat chocolate</button>
          </div>
              <img style={{ marginTop: '-55px'}} onClick={() => imageClick()} className='buttonBack' src={button} alt="" />
        </div>
    )
}

export default StressRelief
 