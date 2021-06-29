import React from 'react';
import "../Styles/Profile.css";
import { Link } from "react-router-dom";
// import DatePicker from "react-datepicker";

function Profile() {

    const image = 'https://s3-alpha-sig.figma.com/img/87d9/4f28/f6354a72490d9104b068c00880076fd5?Expires=1625443200&Signature=Ts4~zDpWnCQIIKEbV0u4PZPdGogCQi9aJxv52nVTJA64A6QDimvG7Swogi3wyj73CQeRkVqTVOLD0J~rDJhRZJfUc4TXJdxok7RGCv0a7O~HWFhjUUoYRtLZbflYkWIO30EYqv3KnCzrxQsmOY1lPp5yvNrrVj0XVrg3d-pHx1dV3ma2Ro1HhQMMqCZd7k~zB7gxmZrcpEt3OoZ3ufmfGgHuakTH~eZYErPTSOPOHNUfcQ7blaBsXKhNvJsVTVwkzSJi-KGwBnnhA6sppWxcFNTc0Z8KzIkMAfT0V4jzNehdfVSDuHbq9FnkPulZKowkuwrsI5BjowuKiEkieBcEcw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';

    // const [startDate, setStartDate] = React.useState(new Date())

    return (
        <div className='profile'>
          <img src={image} alt="stress-tracker" />
          <p className='profileLabel'>Create new profile</p>
          <div className="profileInput">
              <input className='profileText' type="number" placeholder='Your height in centimetres' /> 
              <input className='profileText' type="text" placeholder='Your weight in kg' /> 
              <input className='profileText' type="text" placeholder='How often do you exercise' /> 
              <input className='profileText' type="text" placeholder='Your date of birth' /> 
          </div>
              {/* <div>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    isClearable
                    placeholderText="I have been cleared!"
                    />
              </div> */}
              <button>Time to check your heart-rate</button><br />
              <Link to='/'>Home</Link>
        </div>
    )
}

export default Profile
