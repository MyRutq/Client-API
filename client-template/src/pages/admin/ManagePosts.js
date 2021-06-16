import React, {useState, useEffect} from 'react'
import Posts from '../Posts';

function ManagePosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []); 

    const fetchPosts = async () => {
        try {
            const response = await fetch('http://localhost:5000/posts');
            if (!response.ok) {
                throw new Error('Server error: ' + response.status)
            }
            const data = await response.json();
            console.log(data);
            setPosts(data);
        } catch (error) {
            console.log(error);
        }
    }

    const deletePost = async (postId) => {
        try {
            await fetch('http://localhost:5000/posts' + postId, {
                    method: 'DELETE', // *GET, POST, PATCH, DELETE, etc.
            });

            fetchPosts();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Manage Posts</h1>

            <Posts posts={posts} deletePost={deletePost}/>
        </div>
    )
}

export default ManagePosts