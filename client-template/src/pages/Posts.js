import CardDeck from 'react-bootstrap/CardDeck'
import Post from './Post'


function Posts({posts, deletePost}) {
    return (
        <CardDeck className='justify-content-around'>
            {
                posts.map((post) => (
                    <Post key={post['_id']} post={post} deletePost={deletePost} />
                ))
            }
        </CardDeck>
    )
}

export default Posts









