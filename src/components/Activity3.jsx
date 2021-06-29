import "../Styles/Activity.css";
import { Link, useHistory } from "react-router-dom";


function Activity3() {

    const image = 'https://s3-alpha-sig.figma.com/img/87d9/4f28/f6354a72490d9104b068c00880076fd5?Expires=1625443200&Signature=Ts4~zDpWnCQIIKEbV0u4PZPdGogCQi9aJxv52nVTJA64A6QDimvG7Swogi3wyj73CQeRkVqTVOLD0J~rDJhRZJfUc4TXJdxok7RGCv0a7O~HWFhjUUoYRtLZbflYkWIO30EYqv3KnCzrxQsmOY1lPp5yvNrrVj0XVrg3d-pHx1dV3ma2Ro1HhQMMqCZd7k~zB7gxmZrcpEt3OoZ3ufmfGgHuakTH~eZYErPTSOPOHNUfcQ7blaBsXKhNvJsVTVwkzSJi-KGwBnnhA6sppWxcFNTc0Z8KzIkMAfT0V4jzNehdfVSDuHbq9FnkPulZKowkuwrsI5BjowuKiEkieBcEcw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
    const img2 = 'https://i.pinimg.com/originals/24/a7/9a/24a79a561e11c22ad4ed03299420402e.jpg'
    const img3 = 'https://i0.wp.com/savy-international.com/wp-content/uploads/2015/01/heart-and-stroke-foundation-1.jpg?w=776&ssl=1'

    return (
        <div className="activity">
            <h2 className="activityLabel">Option A : Yoga for 20mins</h2>
            <span style={{ fontSize: '24px', color:'purple', marginTop:'20px'}} className="activityLabel">Just click on the image below for the full video</span>
            <div style={{ marginTop: '30px', marginBottom: '30px'}}>
                <img className='activityImg2' src={img2} alt="stress-tracker" />
            </div>

            <h2 className="activityLabel">Option B : Meditate for 20mins</h2>
            <div style={{ marginTop: '30px', marginBottom: '30px'}}>
                <img className='activityImg2' src={img3} alt="stress-tracker" />
            </div>
            <Link to ='/stress'>Got More Time To Spend ?</Link>
            <div>
                <img src={image} alt="stress-tracker" />
            </div>
        </div>    )
}

export default Activity3
