import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import PostForm from '../PostForm';



function CreatePost() {
    const [post, setPost] = useState({});
    const history = useHistory();

    const handleChange = (e) => {
        setPost({
            ...post, 
            content: e.target.value
        });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const object = {content: post.content}

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

            history.push('manage-posts');
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Create Post</h1>

            <PostForm 
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                post={post}
                pageId="create-post"
            />
        </div>
    )
}

export default CreatePost