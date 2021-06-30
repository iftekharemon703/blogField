import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../Sidebar/Sidebar';


const BlogDetails = () => {
    const { id } = useParams()
    const [blog, setBlog] = useState({})
    useEffect(() => {
        fetch(`https://glacial-savannah-08558.herokuapp.com/blog/${id}`)
            .then(res => res.json())
            .then(data => {
                setBlog(data)
            })
    }, [id])

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-9 text-center">
                    <img src={blog.image} alt="" />
                    <h2>{blog.title}</h2>
                    <span>{blog.date}</span>
                    <p>{blog.description}</p>
                </div>
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;