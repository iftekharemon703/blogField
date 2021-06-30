import React, { useEffect, useState } from 'react';
import './Blogs.css';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/blogs")
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="row">
            {
                blogs.map(blog => <Blog key={blog.id}  blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;