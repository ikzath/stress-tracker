import React from 'react';
import "../Styles/Login.css";
import { Link } from "react-router-dom";

function Login() {

  const image = 'https://s3-alpha-sig.figma.com/img/87d9/4f28/f6354a72490d9104b068c00880076fd5?Expires=1625443200&Signature=Ts4~zDpWnCQIIKEbV0u4PZPdGogCQi9aJxv52nVTJA64A6QDimvG7Swogi3wyj73CQeRkVqTVOLD0J~rDJhRZJfUc4TXJdxok7RGCv0a7O~HWFhjUUoYRtLZbflYkWIO30EYqv3KnCzrxQsmOY1lPp5yvNrrVj0XVrg3d-pHx1dV3ma2Ro1HhQMMqCZd7k~zB7gxmZrcpEt3OoZ3ufmfGgHuakTH~eZYErPTSOPOHNUfcQ7blaBsXKhNvJsVTVwkzSJi-KGwBnnhA6sppWxcFNTc0Z8KzIkMAfT0V4jzNehdfVSDuHbq9FnkPulZKowkuwrsI5BjowuKiEkieBcEcw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
 
  return (
    <div className="login">
      <img src={image} alt="stress-tracker" />
        <div className="logintext">
          <h1 style={{ color: 'red', fontFamily:'Open Sans', marginTop: '20px'}}>Welcome to a stress free world</h1>
        </div>
          <p>Your a few simple steps away from a stress free life</p>
        <button style={{ backgroundColor: 'green'}}>Sign Up in Google</button>
        <button style={{ backgroundColor: 'blue'}}>Sign Up with Facebook</button>
        <span style={{marginTop: '20px'}}>Already have an account? <Link to='/'>Login</Link></span>
    </div>
  );
}

export default Login;

