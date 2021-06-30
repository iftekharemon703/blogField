import React, { useEffect, useState } from 'react';
import './Blogs.css';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("https://glacial-savannah-08558.herokuapp.com/blogs")
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    console.log(blogs)

    return (
        <div className="row">
            {
                blogs.map(blog => <Blog key={blog.id}  blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;