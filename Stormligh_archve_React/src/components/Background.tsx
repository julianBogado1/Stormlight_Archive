import background from '../assets/stormlight_banner.webp';
import '../styles/Landing.css';

export const Background = () => {
    return (
        <div className='background-container'>
            <img src={background} alt="Background" className="background" />
        </div>
    )
}