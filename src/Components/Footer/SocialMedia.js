import './Footer.css';
import Facebook from './../Images/icon-facebook.svg';
import Instagram from './../Images/icon-instagram.svg';
import Twitter from './../Images/icon-twitter.svg';
import Pinterest from './../Images/icon-pinterest.svg';

export default function SocialMedia() {

    const SocialMedia = [
        {
            image: Facebook
        },
        {
            image: Instagram
        },
        {
            image: Twitter
        },
        {
            image: Pinterest
        },
    ]
    return (
        <>
        <div className='social_media_container'>
        {SocialMedia.map((SocialMedia, id) => (
            <a href="/" ><img src={SocialMedia.image} alt="" /></a>
        ))}
        </div>
        
        </>
    );
}