import React, {useState, useEffect} from 'react'


function Post({match}) {
    const [post, setPost] = useState({});

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

    const formatDate = (date) => {
        let dateObj = new Date(date);

        return `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
    }


    return (
        <div>

            <h2> {post.title}</h2>
            <p> {post.author} | {formatDate(post.date)}</p>
            <p><strong>Tags: </strong>{post.tags}</p>                    
            <p>{post.content}</p>

        </div>
    )
}

export default Post
