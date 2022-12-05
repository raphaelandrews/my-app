import React, { useState } from 'react';
import './style.css';
import logo from "../../assets/img/logo-andrews.svg";
import photo from "../../assets/img/foto-raphael.png";
import { Setting2 } from 'iconsax-react';

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const ToggleMenu = () => {
        setMenu(!menu);
    };

    return (
        <header>
            <div className="nav-container">
                <Setting2
                    size="20"
                    color="#d9e3f0"
                    variant="TwoTone"
                />
                
                <nav role="navigation" id="nav" >
                    <ul role="menu" className={menu ? "nav nav__list navOpen" : "nav nav__list navClose"}>
                        <li className="nav__item"><a href="#home" role="menuitem" className="nav__link">Home</a></li>
                        <li className="nav__item"><a href="#about" role="menuitem" className="nav__link">About</a></li>
                        <li className="nav__item"><a href="#contact" role="menuitem" className="nav__link">Contact</a></li>
                    </ul>
                </nav>
                <div className={menu ? "icon iconActive" : "icon"} onClick={ToggleMenu}>
                    <div className='hamburger' ></div>
                    <div className='hamburger' ></div>
                    <div className='hamburger' ></div>
                </div>
            </div>
        </header>
    )
}

export default Navbar;