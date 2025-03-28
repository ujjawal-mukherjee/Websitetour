import React, { useState, useEffect } from 'react';
import './Allblog.css'
const Allblog = () => {
    const [blogs, setBlogs] = useState([]);

    // Function to clean HTML tags and normalize content
    const cleanContent = (content) => {
        if (!content) return '';

        // Remove HTML tags
        const cleanText = content
            .replace(/<\/?[^>]+(>|$)/g, '')  // Remove HTML tags
            .replace(/&nbsp;/g, ' ')         // Replace &nbsp; with spaces
            .replace(/\s+/g, ' ')            // Normalize multiple spaces
            .trim();                         // Remove leading/trailing spaces

        return cleanText;
    };

    useEffect(() => {
        fetch('http://localhost:5000/api/auth/blogs')
            .then((response) => response.json())
            .then((data) => setBlogs(data))
            .catch((error) => console.log('Error fetching blogs: ', error));
    }, []);

    return (
        <div className="blog-container">
            <div className="blog-header">
                <h1>Travel Stories</h1>
            </div>

            <div className="blog-list">
                {blogs.length === 0 ? (
                    <div className="no-blogs">
                        <p>No blogs available yet.</p>
                    </div>
                ) : (
                    blogs.map((blog) => (
                        <div key={blog._id} className="blog-card">
                            <div className="blog-image-container">
                                <img
                                    src={`http://localhost:5000/uploads/${blog.Image}`}
                                    alt={blog.BlogTitle}
                                    className="blog-image"
                                />
                            </div>
                            <div className="blog-content">
                                <div className="blog-destination">
                                    {cleanContent(blog.Destination)}
                                </div>
                                <h2 className="blog-title">
                                    {cleanContent(blog.BlogTitle)}
                                </h2>
                                <div className="blog-desc">
                                    {cleanContent(blog.Blogdesc)}
                                </div>
                                <div className="blog-author">
                                    By {cleanContent(blog.userName)}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Allblog;
