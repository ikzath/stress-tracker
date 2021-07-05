import "../Styles/NegativeStress.css";
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

    return (
        <div className='stress' style={{ marginTop: '30px'}}>
           <img className='imageStyle' src={logo} alt="stress-tracker" />
          <p className='stressLabel' style={{ marginLeft: '0', fontSize:'30px', marginTop: '-5px'}}>Your heartrate is fine</p>
          <p style={{ marginTop: '-10px', marginBottom: '-30px', fontSize: '17px', marginLeft: '-15px'}} className='stressLabel1'>But maybe you would like to some<br /> techniques to feel better</p>
          <img className='relax' src={relax} alt="" />
          <div className="buttonDiv2">
            <img onClick={() => imageClick()} className='buttonBack' src={button} alt="" />
          </div>
        </div>
    )
}

export default GotStress
 