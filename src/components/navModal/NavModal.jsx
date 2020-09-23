import React from 'react';
import { faBars } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import './NavModal.scss';

const NavModal = (props) => {

    return (
        <>
        { props.active ? 
            <section className="NavModal">
                <span onClick={props.clickHandler}>
                    <FontAwesomeIcon icon={faBars} size="2x" />
                </span>
                <nav className="modal-nav">
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
            </section> : ''
        }
        </>
    )
}

export default NavModal;