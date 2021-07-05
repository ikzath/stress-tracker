import React from 'react';
import "../Styles/Home.css";
import { Link } from "react-router-dom";


function Home() {

    const image = 'https://s3-alpha-sig.figma.com/img/87d9/4f28/f6354a72490d9104b068c00880076fd5?Expires=1625443200&Signature=Ts4~zDpWnCQIIKEbV0u4PZPdGogCQi9aJxv52nVTJA64A6QDimvG7Swogi3wyj73CQeRkVqTVOLD0J~rDJhRZJfUc4TXJdxok7RGCv0a7O~HWFhjUUoYRtLZbflYkWIO30EYqv3KnCzrxQsmOY1lPp5yvNrrVj0XVrg3d-pHx1dV3ma2Ro1HhQMMqCZd7k~zB7gxmZrcpEt3OoZ3ufmfGgHuakTH~eZYErPTSOPOHNUfcQ7blaBsXKhNvJsVTVwkzSJi-KGwBnnhA6sppWxcFNTc0Z8KzIkMAfT0V4jzNehdfVSDuHbq9FnkPulZKowkuwrsI5BjowuKiEkieBcEcw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
    const navButton = { fontSize: '24px',
      color:'white',
      backgroundColor: 'red', 
      marginTop: '20px', 
      border: '1px solid red',
      borderRadius: '24px',
      height: '60px',
      width: '400px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textDecoration: 'none'
     }

    return (
        <div className="home">
         <img src={image} alt="stress-tracker" />
            <div className="homeText">
              <h2 className='homeHeader'>Welcome</h2> 
            </div>
              <p className='homeTextPara'> You are one step away from a stress free life. <br /> Please create your profile.</p>
            <Link className='link1' style={navButton} to='/user'>Create new profile</Link>
        </div>
    )
}

export default Home
