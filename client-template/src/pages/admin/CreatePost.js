import React, {useState} from 'react';
import PostForm from '../../components/PostForm';
import { motion } from "framer-motion";
import {
    pageVariants,
    titleVariants
} from '../../components/Animations';


function CreatePost() {
    const [post, setPost] = useState({});
    const [validated, setValidated] = useState(false);

    const handleChange = (e) => {
        setPost({
            ...post, 
            [e.target.name]: e.target.value
        });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        } else {
            window.location.replace('/manage-posts')
        }

        setValidated(true);

        const object = {
            title: post.title,
            author: post.author,
            content: post.content,
            tags: post.tags
        }

        try {
            let response = await fetch('http://localhost:5000/posts', {
                method: 'POST', // *GET, POST, PATCH, DELETE, etc.
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(object) 
            });

            if (!response.ok) {
                throw new Error('Server error: ' + response.status);
            }

            

        } catch(error) {
            console.log(error);
        }
    }

    return (
        <motion.div
        initial={'start'}
        animate={'stop'}
        variants={pageVariants}
        >
            <motion.h2 variants={titleVariants} className='text-center'>Create Post</motion.h2>
            <PostForm 
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                post={post}
                pageId="create-post"
                validated={validated}
            />
            
        </motion.div>
    )
}

export default CreatePost