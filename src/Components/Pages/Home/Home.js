import React from 'react';
import Blogs from '../../Blogs/Blogs';
import Sidebar from '../../Sidebar/Sidebar';

const Home = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-9">
                    <Blogs></Blogs>
                </div>
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default Home;