import React from 'react';
import "../Styles/SignIn.css";
import { Link, useHistory } from "react-router-dom";
import header from "../images/header.png";

function SignIn() {

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
        <div className='newUser' style={{ marginTop: '50px'}}>
          <img src={header} style={{ height: '150px', width: '366px'}} alt="stress-tracker" />
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
