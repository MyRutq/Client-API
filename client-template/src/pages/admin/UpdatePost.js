import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom';
import PostForm from '../PostForm';

function UpdatePost({match}) {
   
    const [post, setPost] = useState({});
    const history = useHistory();

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

           
            history.push('/manage-posts'); 
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Update Post</h1>

            <PostForm 
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                post={post}
                pageId="update-post"
            />
        </div>
    )
}

export default UpdatePost