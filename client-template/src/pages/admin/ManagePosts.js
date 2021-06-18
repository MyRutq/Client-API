import Table from 'react-bootstrap/Table'
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button'

function ManagePosts( { posts, deletePost } ) {
    
    const formatDate = (date) => {
        let dateObj = new Date(date);

        return `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
    }


    return (
        <div>
            <h1>Manage Posts</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Tags</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map((post) => (
                            <tr key={post['_id']}>
                                <td>{post.title}</td>
                                <td>{post.author}</td>
                                <td>{post.tags}</td>
                                <td>{formatDate(post.date)}</td>
                                <td>
                                    <Link to={`/update-post/${post['_id']}`}>
                                        <Button className="mr-2" variant="warning">Update</Button>
                                    </Link>
                                    
                                    <Button variant="danger" className="ml-2" onClick={() => deletePost(post['_id'])}>Delete</Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </Table>
        </div>
    )
}

export default ManagePosts