import React from 'react';
import "../Styles/Login.css";
import { Link } from "react-router-dom";
import header from "../images/header.png";

function Login() {

  const image = 'https://s3-alpha-sig.figma.com/img/87d9/4f28/f6354a72490d9104b068c00880076fd5?Expires=1625443200&Signature=Ts4~zDpWnCQIIKEbV0u4PZPdGogCQi9aJxv52nVTJA64A6QDimvG7Swogi3wyj73CQeRkVqTVOLD0J~rDJhRZJfUc4TXJdxok7RGCv0a7O~HWFhjUUoYRtLZbflYkWIO30EYqv3KnCzrxQsmOY1lPp5yvNrrVj0XVrg3d-pHx1dV3ma2Ro1HhQMMqCZd7k~zB7gxmZrcpEt3OoZ3ufmfGgHuakTH~eZYErPTSOPOHNUfcQ7blaBsXKhNvJsVTVwkzSJi-KGwBnnhA6sppWxcFNTc0Z8KzIkMAfT0V4jzNehdfVSDuHbq9FnkPulZKowkuwrsI5BjowuKiEkieBcEcw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
 
  return (
    <div className="login">
      <img src={header} style={{ height: '150px', width: '410px'}} alt="stress-tracker" />
      {/* <img src={image} alt="stress-tracker" /> */}
        <div className="logintext">
          <h1 style={{ fontFamily:'sans-serif', marginTop: '20px'}}>Create an account</h1>
        </div>
          <div className='header'>
          <button style={{ backgroundColor: 'red', marginTop: '60px', width: '360px', height: '60px'}}>Sign Up in Google</button>
          <button style={{ backgroundColor: 'red',  width: '360px', height: '60px'}}>Sign Up with Facebook</button>
          </div>
        <span style={{marginTop: '20px', color: 'blue'}}>Already have an account? <Link to='/sign-in' style={{color: 'blue'}}>Login</Link></span>
    </div>
  );
}

export default Login;

