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
            <div className="header__container">
                <Setting2
                    size="20"
                    color="#d9e3f0"
                    variant="TwoTone"
                />

                <div className='header__icons'>
                    <a href="" className='header__icon'><i className='bx bxl-github'></i></a>
                    <a href="" className='header__icon'><i className='bx bxl-linkedin' ></i></a>
                    <a href="" className='header__icon'><i className='bx bxl-gmail' ></i></a>
                </div>
            </div>
        </header>
    )
}

export default Navbar;