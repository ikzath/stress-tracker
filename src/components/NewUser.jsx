import React from 'react';
import "../Styles/NewUser.css";
import { Link, useHistory } from "react-router-dom";
import register from "../images/register.png";

function NewUser() {

    const image = 'https://s3-alpha-sig.figma.com/img/87d9/4f28/f6354a72490d9104b068c00880076fd5?Expires=1625443200&Signature=Ts4~zDpWnCQIIKEbV0u4PZPdGogCQi9aJxv52nVTJA64A6QDimvG7Swogi3wyj73CQeRkVqTVOLD0J~rDJhRZJfUc4TXJdxok7RGCv0a7O~HWFhjUUoYRtLZbflYkWIO30EYqv3KnCzrxQsmOY1lPp5yvNrrVj0XVrg3d-pHx1dV3ma2Ro1HhQMMqCZd7k~zB7gxmZrcpEt3OoZ3ufmfGgHuakTH~eZYErPTSOPOHNUfcQ7blaBsXKhNvJsVTVwkzSJi-KGwBnnhA6sppWxcFNTc0Z8KzIkMAfT0V4jzNehdfVSDuHbq9FnkPulZKowkuwrsI5BjowuKiEkieBcEcw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
    const navButton = { 
        fontSize: '24px',
        color:'white',
        marginTop: '75px', 
        backgroundColor: 'red',
        border: '1px solid red',
        borderRadius: '24px',
        height: '60px',
        width: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none'  
    }
    const history = useHistory();
    const imageClick = () => {
        history.push('/user')
       } 

    return (
        <div className='newUser'>
          <img src={image} alt="stress-tracker" />
          <div style={{ marginBottom: '30px'}}>
              <p className='newUserLabel'>Create New Account</p>
          </div>
          <div className="userInput">
              <input className='userInputText1' type="text" placeholder='Username' required /> 
              <input className='userInputText1' type="email" placeholder='Email' required /> 
              <input className='userInputText1' type="password" placeholder='Password' required /> 
              <input className='userInputText1' type="password" placeholder='Confirm Password' required /> 
          </div>
            <div style={{ color:'blue',marginTop: '100px', marginLeft: '-30px', marginBottom: '20px'}} className="userInputPrivacy">
                <input className='userInoutCheckbox' type="checkbox" name="" id="" />
                <span>By signing in you accept the <a href='/'>Terms of <br /> Service & Privacy Policy</a></span>
            </div>
              <Link className='navButton1' to='/profile'>Register</Link>
              <div className="newUserLinks">
              <p style={{ fontSize: '17px'}} className='userPara'>Already have an account?
              <Link style={{marginLeft: '5px'}} to='/sign-in'>Login</Link>
              </p>
              </div>
        </div> 
    )
}

export default NewUser
