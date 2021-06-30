import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = ({blog}) => {
    return (
            <div className="col-md-6">
                <img className="img-fluid postImg" src={blog.image} alt="" />
                <Link to={`/blog/${blog._id}`}>
                    <h2 className="postTitle">{blog.title}</h2>
                </Link>
                <span className="postDate">{blog.date}</span> <br />
                <span className="text-muted text-center">{blog.author}</span>
                <p className="postDesc">{blog.description.substr(0, 240)+'...'}</p>
            </div>
    );
};

export default Blog;