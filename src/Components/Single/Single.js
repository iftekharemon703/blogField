import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import SingleBlog from '../SingleBlog/SingleBlog';

const Single = () => {
    return (
        <div className="single">
            <SingleBlog></SingleBlog>
            <Sidebar></Sidebar>
        </div>
    );
};

export default Single;