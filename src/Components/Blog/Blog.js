import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = ({blog}) => {
    return (
            <div className="col-md-6">
                <img className="img-fluid postImg" src={blog.img} alt="" />
                <Link to={`/blog/${blog.id}`}>
                    <h2 className="postTitle">{blog.title}</h2>
                </Link>
                <span className="postDate">{blog.date}</span>
                <p className="postDesc">{blog.description.substr(0, 140)+'...'}</p>
            </div>
    );
};

export default Blog;