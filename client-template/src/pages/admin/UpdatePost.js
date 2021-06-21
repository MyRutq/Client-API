import React, {useState, useEffect} from 'react'
import PostForm from '../../components/PostForm';
import { motion } from "framer-motion";
import {
    pageVariants,
    titleVariants
} from '../../components/Animations';

function UpdatePost({match}) {
   
    const [post, setPost] = useState({});
    const [validated, setValidated] = useState(false);
   

    useEffect(() => {
        fetchPost();
    }, []);

    const fetchPost = async () => {
        try {
            const response = await fetch('http://localhost:5000/posts/' + match.params.id);
            if (!response.ok) {
                throw new Error('Server error: ' + response.status)
            }
            const data = await response.json();
            console.log(data);
            setPost(data);
        } catch (error) {
            console.log(error);
        }
    }


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
            await fetch('http://localhost:5000/posts/' + post['_id'], {
                method: 'PATCH', 
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(object)
            });


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <motion.div
        initial={'start'}
        animate={'stop'}
        variants={pageVariants}
        >
            <motion.h2 variants={titleVariants} className='text-center'>Update Post</motion.h2>
            <PostForm 
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                post={post}
                pageId="update-post"
                validated={validated}
            />
            
        </motion.div>
    )
}

export default UpdatePost