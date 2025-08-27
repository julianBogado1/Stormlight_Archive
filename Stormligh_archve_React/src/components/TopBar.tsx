import '../styles/Landing.css';
import {Link} from 'react-router-dom';
import {useEffect, useState, useRef} from 'react';

export type TopBar = {
    banner: string;
    buttonString: string;
}

export const TopBar = ({ banner, buttonString }: TopBar) => {


    const [menuState, setMenuState] = useState<boolean>(false);

    const toggleMenu = () => {
        setMenuState(!menuState);
    }

    const menuRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuState(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
       <div className='top-bar'>
            {/* in Menu */}
            {buttonString==='See Maps!' &&<Link to="/maps">
                <button className='menu-button' onClick={toggleMenu}>{buttonString}</button>
            </Link> }
            {/* in maps */}
            {buttonString==='Back Home' && 
            <Link to="/">
                <button className='menu-button' onClick={toggleMenu}>{buttonString}</button>
            </Link> }
            
            <div className='banner-container'> 
                <h1 className='banner'>{banner}</h1>
            </div>
        </div>
    );
}
