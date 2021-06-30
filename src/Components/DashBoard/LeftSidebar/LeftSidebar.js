import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faPlus, faAlignJustify } from '@fortawesome/free-solid-svg-icons';

const LeftSidebar = () => {
    const [admin, setAdmin] = useState({});
    const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser")) || {};

    useEffect(() => {
        fetch(`https://fathomless-caverns-04079.herokuapp.com/admin?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data))
    },[])

    const handleLogout = () => {
        sessionStorage.removeItem("loggedInUser");
        sessionStorage.removeItem("serviceInfo");
    }

    return (
        <div className="left-sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-dark fs-2">Blog Field</Link>
                </li>
                <li>
                    <Link to="/add-Blog" className="text-dark">
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Blog</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/manage-Blog" className="text-dark">
                        <FontAwesomeIcon icon={faAlignJustify} /> <span>Manage Blog</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link onClick={handleLogout} to="/" className="text-dark"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default LeftSidebar;