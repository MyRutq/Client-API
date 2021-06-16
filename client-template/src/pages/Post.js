
import React from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import { ListGroup } from 'react-bootstrap'

function Post({post, deletePost}) {
    const formatDate = (date) => {
        let dateObj = new Date(date);

        return `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
    }

    const handleDeletePost = () => {
        deletePost(post['_id']);
    }

    return (

    <Card style={{ minWidth: '18rem', maxWidth: '20rem' }} className='mb-3'>
            
        <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>
                {post.content}
            </Card.Text>
                <ListGroup>
                    <ListGroup.Item>{formatDate(post.date)}</ListGroup.Item>
                    <ListGroup.Item>{post.tags}</ListGroup.Item>
                </ListGroup>
            <Link to={`/update-post/${post['_id']}`}>
                <button>Update</button>
            </Link>
            <button onClick={handleDeletePost}>Delete</button>
        </Card.Body>
    </Card>
            
)
}

export default Post
