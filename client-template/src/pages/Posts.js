import CardDeck from 'react-bootstrap/CardDeck'
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import { ListGroup } from 'react-bootstrap'


function Posts({posts, deletePost}) {

    const formatDate = (date) => {
        let dateObj = new Date(date);

        return `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
    }

    return (
        <CardDeck className='justify-content-around'>
            {
                posts.map((post) => (
                    <Card style={{ minWidth: '18rem', maxWidth: '20rem' }} className='mb-3' key={post['_id']}>
            
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>
                                {post.content}
                            </Card.Text>
                                <ListGroup>
                                    <ListGroup.Item>{formatDate(post.date)}</ListGroup.Item>
                                    <ListGroup.Item>{post.tags}</ListGroup.Item>
                                </ListGroup>
                            <Link to={`/posts/${post['_id']}`}>
                                <button className="btn btn-success">Read more...</button>
                            </Link>
                    
                        </Card.Body>
                    </Card>
                ))
            }
        </CardDeck>
    )
}

export default Posts









