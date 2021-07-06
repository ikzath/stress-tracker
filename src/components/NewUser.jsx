import React from 'react';
import "../Styles/NewUser.css";
import { Link, useHistory } from "react-router-dom";
import header from "../images/header.png";

function NewUser() {

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
        <div className='newUser' style={{ marginTop: '50px'}}>
          <img src={header} style={{ height: '150px', width: '366px'}} alt="stress-tracker" />
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
