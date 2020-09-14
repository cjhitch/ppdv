import React from 'react';
import { ReactComponent as Logo } from './logo-dark.svg';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header className="Header">
            <Logo />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/tutorials">Tutorials</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </nav>
            <button>Subscribe</button>
        </header>
    )
}

export default Header;