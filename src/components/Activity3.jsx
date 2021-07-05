import "../Styles/Activity.css";
import { Link, useHistory } from "react-router-dom";


function Activity3() {

    const image = 'https://s3-alpha-sig.figma.com/img/87d9/4f28/f6354a72490d9104b068c00880076fd5?Expires=1625443200&Signature=Ts4~zDpWnCQIIKEbV0u4PZPdGogCQi9aJxv52nVTJA64A6QDimvG7Swogi3wyj73CQeRkVqTVOLD0J~rDJhRZJfUc4TXJdxok7RGCv0a7O~HWFhjUUoYRtLZbflYkWIO30EYqv3KnCzrxQsmOY1lPp5yvNrrVj0XVrg3d-pHx1dV3ma2Ro1HhQMMqCZd7k~zB7gxmZrcpEt3OoZ3ufmfGgHuakTH~eZYErPTSOPOHNUfcQ7blaBsXKhNvJsVTVwkzSJi-KGwBnnhA6sppWxcFNTc0Z8KzIkMAfT0V4jzNehdfVSDuHbq9FnkPulZKowkuwrsI5BjowuKiEkieBcEcw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
    const img2 = 'https://www.pngitem.com/pimgs/m/42-429523_svg-stock-netherlands-bicycle-roadster-a-little-riding.png'
    const img3 = 'https://us.123rf.com/450wm/f1digitals/f1digitals2008/f1digitals200800013/154431699-vector-cartoon-illustration-tamil-woman-is-cooking-food-in-a-pot-isolated-on-white-background-.jpg?ver=6'
    
    const styles = {
        fontSize: '24px', fontFamily: 'fantasy', color:'red', marginTop: '30px'
    }

    const imageStyles = {
        width: '300px'
    }

    return (
        <div className="activity">
            <h2 className="activityLabel">Option A : Bike ride for 45 minutes</h2>
            {/* <span style={{ fontSize: '24px', color:'purple', marginTop:'20px'}} className="activityLabel">Just click on the image below for the full video</span> */}
            <div style={{ marginTop: '-20px', marginBottom: '70px'}}>
            <img className='activityImg2' src={img2} alt="stress-tracker" />
            </div>

            <h2 className="activityLabel">Option B : Cook a meal & share with love - one hour</h2>
            <div style={{ marginTop: '-20px', marginBottom: '30px'}}>
            <img className='activityImg2' src={img3} alt="stress-tracker" />
            </div>
            <Link style={styles} to ='/stress'>Got More Time To Spend ?</Link>
            <div>
            <img style={imageStyles} src={image} alt="stress-tracker" />
            </div>
        </div>    )
}

export default Activity3
