import "../Styles/MessageNoStress.css";
import { useHistory } from "react-router-dom";
import logo from "../images/logo.png";
import relax from "../images/relax-button.png";
import button from "../images/button.png";

function GotStress() {

    const imageClick = () => {
     history.push('/stress')
    } 

    const image = 'https://s3-alpha-sig.figma.com/img/87d9/4f28/f6354a72490d9104b068c00880076fd5?Expires=1625443200&Signature=Ts4~zDpWnCQIIKEbV0u4PZPdGogCQi9aJxv52nVTJA64A6QDimvG7Swogi3wyj73CQeRkVqTVOLD0J~rDJhRZJfUc4TXJdxok7RGCv0a7O~HWFhjUUoYRtLZbflYkWIO30EYqv3KnCzrxQsmOY1lPp5yvNrrVj0XVrg3d-pHx1dV3ma2Ro1HhQMMqCZd7k~zB7gxmZrcpEt3OoZ3ufmfGgHuakTH~eZYErPTSOPOHNUfcQ7blaBsXKhNvJsVTVwkzSJi-KGwBnnhA6sppWxcFNTc0Z8KzIkMAfT0V4jzNehdfVSDuHbq9FnkPulZKowkuwrsI5BjowuKiEkieBcEcw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
    const history = useHistory();

    function onClickHandler1(){
        history.push('/breathing')
    } 

    function onClickHandler2(){
        history.push('/free-writing')
    }

    function onClickHandler3(){
        history.push('/activity3')
    }

    function clickHandler(){
        history.push('/hr-tracker')   
    }

    return (
        <div className='stress'>
           <img className='imageStyle' src={logo} alt="stress-tracker" />
          <p className='stressLabel'>Your heartrate is fine.</p>
          <p className='stressLabel2'>Maybe you can try some <br />techniques to feel better</p>
          <img className='relax' src={relax} alt="" />
          <div className="buttonDiv2">
            <img onClick={() => imageClick()} className='button2' src={button} alt="" />
          </div>
        </div>
    )
}

export default GotStress 
 