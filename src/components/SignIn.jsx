import React from 'react';
import "../Styles/SignIn.css";
import { Link, useHistory } from "react-router-dom";
import loginButton from "../images/loginButton.png";

function SignIn() {

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
        history.push('/profile')
       } 

    return (
        <div className='newUser'>
          <img src={image} alt="stress-tracker" />  
            <div style={{ marginBottom: '30px'}}>
                <p className='newUserLabel'>Please login</p>
            </div>
            <div className="userInput">
              <input className='userInputText1' type="email" placeholder='Email' required /> 
              <input className='userInputText1' type="password" placeholder='Password' required /> 
          </div>
            <div className="userInputPrivacy">
                <span><a style={{color:'blue', fontSize: '20px'}} href='/'>Forgot Password</a></span>
            </div>
              <Link className='navButton1' to='/profile'>Login</Link>
              <div className="newUserLinks">
              <p className='userPara'>Don't have an account yet?
              <Link style={{marginLeft: '5px', color:'blue'}} to='/user'>Sign up</Link>
              </p>
              </div>
        </div> 
    )
}

export default SignIn
