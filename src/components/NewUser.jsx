import React from 'react';
import "../Styles/NewUser.css";
import { Link } from "react-router-dom";

function NewUser() {

const image = 'https://s3-alpha-sig.figma.com/img/87d9/4f28/f6354a72490d9104b068c00880076fd5?Expires=1625443200&Signature=Ts4~zDpWnCQIIKEbV0u4PZPdGogCQi9aJxv52nVTJA64A6QDimvG7Swogi3wyj73CQeRkVqTVOLD0J~rDJhRZJfUc4TXJdxok7RGCv0a7O~HWFhjUUoYRtLZbflYkWIO30EYqv3KnCzrxQsmOY1lPp5yvNrrVj0XVrg3d-pHx1dV3ma2Ro1HhQMMqCZd7k~zB7gxmZrcpEt3OoZ3ufmfGgHuakTH~eZYErPTSOPOHNUfcQ7blaBsXKhNvJsVTVwkzSJi-KGwBnnhA6sppWxcFNTc0Z8KzIkMAfT0V4jzNehdfVSDuHbq9FnkPulZKowkuwrsI5BjowuKiEkieBcEcw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';

    return (
        <div className='newUser'>
          <img src={image} alt="stress-tracker" />
          <p className='newUserLabel'>Create New Account</p>
          <div className="userInput">
              <input className='userInputText' type="text" placeholder='Email' /> 
              <input className='userInputText' type="text" placeholder='Paswword' /> 
              <input className='userInputText' type="text" placeholder='Confirm Password' /> 
          </div>
          <div className="userInputPrivacy">
              <input className='userInoutCheckbox' type="checkbox" name="" id="" />
              <span>By signing in you accept the <a href='/'>Terms of Service</a> and <a href='/'>Privacy Policy</a></span>
          </div>
              <button>Register</button>
              <p>Already have an account?</p>
              <Link to='/'>Login</Link>
        </div>
    )
}

export default NewUser
