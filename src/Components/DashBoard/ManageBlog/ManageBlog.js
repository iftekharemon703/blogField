import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import LeftSidebar from '../LeftSidebar/LeftSidebar';

const ManageBlog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    const handleDelete = ((id) => {
        fetch(`http://localhost:5000/deleteBlog/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                window.location.reload();
            }
        })
    })

    return (
        <section>
            <div className="row">
                <div className="col-md-2">
                    <LeftSidebar></LeftSidebar>
                </div>
                <div className="col-md-10">
                <div className="col-md-10 p-5">
          <table class="table text-center">
            <thead className="bg-light">
              <tr>
              <th scope="col">Sr No</th>
                <th scope="col">Blog Title</th>
                <th scope="col">Author</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                    blogs.map((blog, index) => 
                  <tr key={blog._id}>
                    <td>{index+1}</td>
                    <td>{blog.title}</td>
                    <td>{blog.author}</td>
                    <td><span onClick={() => handleDelete(blog._id)}><FontAwesomeIcon icon={faTrashAlt}/></span></td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
                </div>
            </div>
        </section>
    );
};

export default ManageBlog;