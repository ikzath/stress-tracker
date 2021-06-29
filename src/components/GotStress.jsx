import "../Styles/GotStress.css";
import { Link, useHistory } from "react-router-dom";

function GotStress() {

    const image = 'https://s3-alpha-sig.figma.com/img/87d9/4f28/f6354a72490d9104b068c00880076fd5?Expires=1625443200&Signature=Ts4~zDpWnCQIIKEbV0u4PZPdGogCQi9aJxv52nVTJA64A6QDimvG7Swogi3wyj73CQeRkVqTVOLD0J~rDJhRZJfUc4TXJdxok7RGCv0a7O~HWFhjUUoYRtLZbflYkWIO30EYqv3KnCzrxQsmOY1lPp5yvNrrVj0XVrg3d-pHx1dV3ma2Ro1HhQMMqCZd7k~zB7gxmZrcpEt3OoZ3ufmfGgHuakTH~eZYErPTSOPOHNUfcQ7blaBsXKhNvJsVTVwkzSJi-KGwBnnhA6sppWxcFNTc0Z8KzIkMAfT0V4jzNehdfVSDuHbq9FnkPulZKowkuwrsI5BjowuKiEkieBcEcw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
    const history = useHistory();

    function onClickHandler1(){
        history.push('/activity1')
    }

    function onClickHandler2(){
        history.push('/activity2')
    }

    function onClickHandler3(){
        history.push('/activity3')
    }

    return (
        <div className='stress'>
          <p className='stressLabel'>You seem to be somewhat stressed, but have no fear as we here</p>
          <p className='stressLabel'>How much time do you have right now ?</p>
          <div className="userInput">
              <button onClick={onClickHandler1} className='userInputText'>A few minutes</button>
              <button onClick={onClickHandler2} className='userInputText'>A bit of Time</button>
              <button onClick={onClickHandler3} className='userInputText'>Alot of Time</button>
          </div>
          <img src={image} alt="stress-tracker" />
        </div>
    )
}

export default GotStress
 