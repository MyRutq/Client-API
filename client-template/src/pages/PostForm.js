import React from 'react'
import {Link} from 'react-router-dom';

function PostForm({handleSubmit, handleChange, post, pageId}) {
    const formatDate = (date) => {
        let dateObj = new Date(date);

        return `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea 
                name="" 
                id="" 
                cols="30" 
                rows="10" 
                value={post.content} 
                onChange={handleChange}
            />

            {
                pageId === 'update-post'
                    ? <p>Created at: {formatDate(post.date)}</p>
                    : ''
            }
            
            
            <br />
            <br />
            
            <button>{ pageId === 'update-post' ? 'Update' : 'Create'}</button>
            
            <br />
            <br />

            <Link to="/manage-posts">&#x2190; back</Link>
        </form>
    )
}

export default PostForm