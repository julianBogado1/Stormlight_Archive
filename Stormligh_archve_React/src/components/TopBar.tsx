import '../styles/Landing.css';
import {Link} from 'react-router-dom';

export type TopBar = {
    banner: string;
    buttonString: string;
}

export const TopBar = ({ banner, buttonString }: TopBar) => {
    return (
        <div className='top-bar'>
            <h1 className='banner'>{banner}</h1>
            <Link to="/maps"><button>{buttonString}</button></Link>
        </div>
    );
}
