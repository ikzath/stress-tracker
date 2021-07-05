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

    const imageStyles = {
        width: '373px',
        marginTop: '15px'
    }

    function clickHandler(){
        history.push('/hr-tracker')   
    }

    return (
        <div className='stress'>
           <img style={imageStyles} src={image} alt="stress-tracker" />
          <p className='stressLabel'>Your heart rate seems</p>
          <p style={{ marginTop: '-25px'}} className='stressLabel'> to be balanced.</p>
          <p className='stressLabel2'>But would you still like to try</p>
          <p style={{ marginTop: '-20px', marginBottom: '0px'}} className='stressLabel2'>some exercises? Do you have...</p>
          {/* <p className='stressLabel2'>Would you have some time to...</p> */}
          <div className="userInput">
              <button onClick={onClickHandler1} className='userInputText'>A few minutes</button>
              <button onClick={onClickHandler2} className='userInputText'>A bit of time</button>
              <button onClick={onClickHandler3} className='userInputText'>Alot of time</button>
          </div>
          <button onClick={clickHandler} className='profileButton'>Back </button><br />
        </div>
    )
}

export default GotStress
 