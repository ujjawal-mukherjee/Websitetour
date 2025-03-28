import React, { useState, useRef } from 'react'
import JoditEditor from 'jodit-react';
import axios from 'axios';
import './blog.css'
const Blog = () => {
    const [form, setForm] = useState({ BlogTitle: " ", Destination: " ", Blogdesc: " ", Image: null });
    //const [username, setUsername] = useState('');
    const editor = useRef(null);
    //const [error, seterror] = useState({});
    const Handlechange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
        //seterror({ ...error, [event.target.name]: " " });
    }
    const handleImageChange = (event) => {
        setForm({ ...form, Image: event.target.files[0] });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        //FormData is build js library for key value pair
        const formData = new FormData();
        formData.append('BlogTitle', form.BlogTitle);
        formData.append('Destination', form.Destination);
        formData.append('Blogdesc', form.Blogdesc);
        formData.append('Image', form.Image);
        try {
            const response = await fetch('http://localhost:5000/api/blogs/add', {
                method: 'POST',
                body: formData,
                credentials: 'include'
            });
            const data = await response.json();
            if (response.ok) {
                //const data = await response.json();
                //setUsername(data.user.userName);
                alert(data.message);
            } else {
                alert("Error: " + data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Error adding blog");
        }
    };
    return (
        <div className='blog'>
            <h2 className='heading12'>Welcome,write about your Tour Experience</h2>
            <h2 className='heading13'>Add a new Blog</h2>
            <form onSubmit={handleSubmit} className='blog-form'>
                <label>Blog Title<input type='text' value={form.BlogTitle} name='BlogTitle' onChange={Handlechange} required /></label>
                <label>Your visited destination<input type='text' value={form.Destination} name='Destination' onChange={Handlechange} required /></label>
                <label >Blog Description</label>
                <JoditEditor
                    ref={editor}
                    value={form.Blogdesc}
                    onChange={(newContent) => setForm({ ...form, Blogdesc: newContent })}
                />
                <label>Featured Image<input type='file' accept='image/*'
                    onChange={handleImageChange}
                    required /></label>
                <button type='submit' className='submit-btn'>Submit Blog</button>
            </form>
        </div>
    )
}

export default Blog;
