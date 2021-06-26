import React from 'react';
import './Blogs.css';
import Blog from '../Blog/Blog';
import blogData from '../../fakeData/fakeData';

const Blogs = () => {
    return (
        <div className="row">
            {
                blogData.map(blog => <Blog key={blog.id}  blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;