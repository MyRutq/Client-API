import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import { ListGroup } from 'react-bootstrap'

function Post({posts, match}) {


    const [post, setPost] = useState([]);
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
        <div className="d-flex flex-column align-items-center">
            <Card style={{ width: '50vw' }} >

                <Card.Body>
                    <Card.Title className="text-center">{post.title}</Card.Title>
                    <Card.Subtitle className="mb-2 mt-2 text-muted text-center">
                        {post.author} | {formatDate(post.date)}
                    </Card.Subtitle>
                        <Card.Text className="text-center">
                            <strong>Tags: </strong>{post.tags}
                        </Card.Text>
                        <ListGroup>
                            <ListGroup.Item>{post.content}</ListGroup.Item>
                        </ListGroup>
                </Card.Body>
                
            </Card>

            <Link className="mt-3 mb-3" to="/">&#x2190; Back</Link>
        </div>
    )
}

export default Post
