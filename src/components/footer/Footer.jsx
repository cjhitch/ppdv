import React from 'react';
import { NavLink} from 'react-router-dom';
import { ReactComponent as Logo } from './bulb.svg';
import {faTwitter, faLinkedin, faFacebook} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './Footer.scss'

const Footer = () => {
    return (
        <footer className="Footer">
            <section className="upper-footer">
                <h5 className="h6">
                    Visionary Creatives
                </h5>
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
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" activeClassName="selected">
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/tutorials">
                                Terms & Conditions
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">
                                Privacy Policy
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">
                                Sitemap
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <section>
                    <h6 className="h5">
                        Weekly Newsletter
                    </h6>
                    <p>
                        Get new updates directly to your inbox.
                    </p>
                    <form>
                        <input type="text" placeholder="your@email.com"/>
                        <button className="round secondary" type="submit">Subscribe</button>
                    </form>
                </section>
            </section>
            <section className="lower-footer">
                <div>
                    &copy; 2020 Visionary Creatives - All Rights Reserved
                    <span>
                        <a rel="noopener noreferrer" target="_blank" href="https://twitter.com">
                            <FontAwesomeIcon icon={faTwitter} size="lg"/>
                        </a>
                        <a rel="noopener noreferrer" target="_blank" href="https://facebook.com">
                            <FontAwesomeIcon icon={faFacebook} size="lg"/>
                        </a>
                        <a rel="noopener noreferrer" target="_blank" href="https://linkedin.com">
                            <FontAwesomeIcon icon={faLinkedin} size="lg"/>
                        </a>
                    </span>
                </div>
            </section>
        </footer>
    )
}

export default Footer;