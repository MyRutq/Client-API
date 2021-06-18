import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import { ListGroup } from 'react-bootstrap'
import LinkButton from '../components/LinkButton'
import WordLimit from 'react-word-limit';


function Posts({ posts }) {

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
                            <Card.Subtitle className="mb-2 mt-2 text-muted">
                                {post.author} | {formatDate(post.date)}
                            </Card.Subtitle>
                                <Card.Text>
                                    <strong>Tags: </strong>{post.tags}
                                </Card.Text>
                                <ListGroup>
                                    <ListGroup.Item><WordLimit limit={150}>{post.content}</WordLimit></ListGroup.Item>
                                </ListGroup>
                        </Card.Body>
                        
                        <LinkButton className="flex-end" to={`/post/${post['_id']}`}>Read more...</LinkButton>                                
                                
                    </Card>
                ))
            }
        </CardDeck>
    )
}

export default Posts





