import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import './Sidebar.css';
import aboutImg from '../../images/Iftekhar_Hossain.jpg';

const Sidebar = () => {
    return (
            <div className="sidebar">
                <div className="sidebarItem">
                    <span className="sidebarTitle">ABOUT ME</span>
                    <img className="img-fluid"  src={aboutImg} alt="" />
                    <p>
                    This is Iftekhar Emon. I'm a junior frontend developer. also, i like to work with bloging. blogify is my retro blog site. 
                    </p>
                </div>
                <div className="sidebarItem">
                    <span className="sidebarTitle">FOLLOW US</span>
                    <div className="sidebarSocial">    
                        <FontAwesomeIcon className="sidebarIcon" icon={faFacebookSquare} />
                        <FontAwesomeIcon className="sidebarIcon" icon={faTwitterSquare} />
                        <FontAwesomeIcon className="sidebarIcon" icon={faInstagramSquare} />
                    </div>
                </div>
            </div>
    );
};

export default Sidebar;