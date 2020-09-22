import React from 'react';
import { ReactComponent as Logo } from './logo-dark.svg';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header className="Header">
            <Logo />
            <nav>
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
        </header>
    )
}

export default Header;