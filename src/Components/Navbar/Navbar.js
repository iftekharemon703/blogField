import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import img from '../../images/Iftekhar_Hossain.jpg';

const Navbar = () => {
    return (
        <div className="nav">
            <div className="left">
                <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
                <FontAwesomeIcon className="icon" icon={faTwitterSquare} />
                <FontAwesomeIcon className="icon" icon={faInstagramSquare} />
            </div>
            <div className="middle">
                <ul className="lists">
                    <li className="listItem">HOME</li>
                    <li className="listItem">ABOUT</li>
                    <li className="listItem">CONTACT</li>
                    <li className="listItem">WRITE</li>
                    <li className="listItem">LOGOUT</li>
                </ul>
            </div>
            <div className="right">
                <img className="img" src={img} alt="" />
                <FontAwesomeIcon className="searchIcon" icon={faSearch} />
            </div>

        </div>
    );
};

export default Navbar;