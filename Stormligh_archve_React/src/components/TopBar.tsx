import '../styles/Landing.css';
import {Link} from 'react-router-dom';
import {useEffect, useState, useRef} from 'react';

export type TopBarProps = {
    banner: string;
    buttonString: string;
}

export const TopBar = ({ banner, buttonString }: TopBarProps) => {


    const [menuState, setMenuState] = useState<boolean>(false);

    function toggleMenu() {
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

            {/* TODO manage all cases */}
            {"Shopping"==="Shopping" && 
                <Link to="/shopping">
                    <button className='menu-button'>
                        Shopping
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                            width={24}
                            height={24}
                            aria-hidden="true"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                        </svg>

                    </button>
                </Link>
            }
            <div className='banner-container'> 
                <h1 className='banner'>{banner}</h1>
            </div>
        </div>
    );
}
