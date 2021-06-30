import React, { useState } from 'react';
import axios from 'axios';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import { useForm } from 'react-hook-form';

const AddBlog = () => {
    const { register, handleSubmit } = useForm();
    const [imageUrl, setImageUrl] = useState(null)

    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', 'c5ad40e7d62ccba33fad67c5de1000a4')
        imageData.append('image', event.target.files[0]) 
    
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                alert(error.message);
            });
    }

    const onSubmit = data => {
        if (imageUrl === null) {
            alert('Please Wait for image uploading')
        }
        else {
            const newBlog = { ...data, date:new Date(), image: imageUrl }
            fetch('http://localhost:5000/addBlog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newBlog)
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        alert('Thanks for Added Blog')
                        window.location.reload()
                    }
                })
        }
    };
    return (
        <section>
            <div className="row">
                <div className="col-md-2">
                    <LeftSidebar></LeftSidebar>
                </div>
                <div className="col-md-10">
                    <form onSubmit={handleSubmit(onSubmit)} className="col-md-6 p-5">

                        <label htmlFor="title"> Blog Title</label>
                        <input id="title" className="form-control mb-3" type="text" placeholder="Enter Your Title" {...register("title", { required: true })} />
                        
                        <label htmlFor="author">Author</label>
                        <input id="author" className="form-control mb-3" type="text" placeholder="Author Name" {...register("author", { required: true })} />

                        <label htmlFor="desc">Blog Description</label>
                        <textarea id="desc" className="form-control mb-3" placeholder="Enter Your Description" {...register("description", { required: true })} />

                        <label htmlFor="img">Add Blog Thumbnail</label>
                        <input id="img" onChange={handleImageUpload} type="file" className="form-control mb-3"/>

                        <input className="btn-primary text-white py-2 px-3" type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddBlog;