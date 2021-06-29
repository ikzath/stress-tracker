import "../Styles/Activity.css";
import { Link, useHistory } from "react-router-dom";


function Activity1() {

    const image = 'https://s3-alpha-sig.figma.com/img/87d9/4f28/f6354a72490d9104b068c00880076fd5?Expires=1625443200&Signature=Ts4~zDpWnCQIIKEbV0u4PZPdGogCQi9aJxv52nVTJA64A6QDimvG7Swogi3wyj73CQeRkVqTVOLD0J~rDJhRZJfUc4TXJdxok7RGCv0a7O~HWFhjUUoYRtLZbflYkWIO30EYqv3KnCzrxQsmOY1lPp5yvNrrVj0XVrg3d-pHx1dV3ma2Ro1HhQMMqCZd7k~zB7gxmZrcpEt3OoZ3ufmfGgHuakTH~eZYErPTSOPOHNUfcQ7blaBsXKhNvJsVTVwkzSJi-KGwBnnhA6sppWxcFNTc0Z8KzIkMAfT0V4jzNehdfVSDuHbq9FnkPulZKowkuwrsI5BjowuKiEkieBcEcw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
    const box = 'https://www.anahana.com/hs-fs/hubfs/Square-breathing-gif.gif?width=394&name=Square-breathing-gif.gif'

    return (
        <div className="activity">
                <h2 className="activityLabel">Box Breathing Exercise</h2>
                <span  className="activityLabel">This lasts for just 3 minutes but has amazing benefits</span>
                <span style={{ fontSize: '24px', color:'green', marginTop:'20px'}} className="activityLabel">Just click on the image below for the full video</span>
            <div style={{ marginTop: '30px', marginBottom: '30px'}}>
                <img className='activityImg' src={box} alt="stress-tracker" />
            </div>
            <Link to ='/stress'>Got More Time To Spend ?</Link>
            <div>
                <img src={image} alt="stress-tracker" />
            </div>
        </div>
        )
}

export default Activity1
