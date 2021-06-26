import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../../../fakeData/fakeData';
import Sidebar from '../../Sidebar/Sidebar';


const BlogDetails = () => {
    const {id} = useParams();
    const currentBlog = blogData.find(blog => blog.id === Number(id));
    
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-9 text-center">
                    <img src={currentBlog.img} alt="" />
                    <h2>{currentBlog.title}</h2>
                    <span>{currentBlog.date}</span>
                    <p>{currentBlog.description}</p>
                </div>
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;