import React, { useState } from 'react';
import { ReactComponent as Logo } from './logo-dark.svg';
import { ReactComponent as LogoMob } from './logo.svg';
import { faBars } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import NavModal from '../navModal/NavModal';
import './Header.scss';

const Header = () => {

    const [active, setActive] = useState(false);

    const clickHandler = () => {
        setActive(!active);
    }

    return (
        <header className="Header">
            <Logo className="dark" />
            <nav className="desk">
                <ul>
                    <li>
                        <NavLink to="/" activeClassName="selected">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/tutorials">
                            Tutorials
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <button className="outline">Subscribe</button>
            <span onClick={clickHandler}>
                <FontAwesomeIcon icon={faBars} size="2x" />
            </span>
            <LogoMob className="light"/>
            <NavModal clickHandler={clickHandler} active={active}/>
        </header>
    )
}

export default Header;