import React from 'react';
import "../Styles/Profile.css";
import { Link, useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import profileImage from "../images/profileImage.png";


function Profile() {

    const image = 'https://s3-alpha-sig.figma.com/img/87d9/4f28/f6354a72490d9104b068c00880076fd5?Expires=1625443200&Signature=Ts4~zDpWnCQIIKEbV0u4PZPdGogCQi9aJxv52nVTJA64A6QDimvG7Swogi3wyj73CQeRkVqTVOLD0J~rDJhRZJfUc4TXJdxok7RGCv0a7O~HWFhjUUoYRtLZbflYkWIO30EYqv3KnCzrxQsmOY1lPp5yvNrrVj0XVrg3d-pHx1dV3ma2Ro1HhQMMqCZd7k~zB7gxmZrcpEt3OoZ3ufmfGgHuakTH~eZYErPTSOPOHNUfcQ7blaBsXKhNvJsVTVwkzSJi-KGwBnnhA6sppWxcFNTc0Z8KzIkMAfT0V4jzNehdfVSDuHbq9FnkPulZKowkuwrsI5BjowuKiEkieBcEcw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
    const history = useHistory();
    const [startDate, setStartDate] = React.useState(new Date())

    function clickHandler(){
        history.push('/hr-tracker')   
    }

    return (  
        <div className='profile'>
            <div className="profileHeader">
                <img className="profileHeaderImage" src={profileImage} alt="stress-tracker" />
                    <Link style={{ color: 'blue', fontSize: '20px'}} to='/'>Logout</Link>
                <div className="profileHeaderLink">
                </div>
            </div>
            <div className="profileInput">
            <label className='labelText' htmlFor="">What's your date of birth?</label>
              <div>
              <input className='datePicker' type="date"></input>
              </div>
              <label className='labelText' htmlFor="">How tall are you?</label>
              <input className='profileText' type="number" placeholder='xx cm.' /> 

              <label className='labelText' htmlFor="">How much do you weigh?</label>
              <input className='profileText' type="number" placeholder='xx kg.' /> 
              <label className='labelText' htmlFor="">How often do you exercise?</label>
              <select className='profileSelect'>
                <option value="">I exercise...</option>
                <option className='profileSelectTab' value="">Never or hardly ever</option>
                <option className='profileSelectTab' value="">Once or twice a week</option>
                <option className='profileSelectTab' value="">Regularly, I'm fit</option>
              </select>
          </div>
              <div style={{ marginTop: '15px', marginBottom: '15px', marginLeft: '-18px', fontSize:'20px'}}>
              <p>Please synchronize your smartwatch</p>
              </div>
              <div>
              <button onClick={clickHandler} style={{backgroundColor: 'red'}} className='profileButton'>Synchronize</button><br />
              </div>
        </div>
    )
}


export default Profile
