import React from 'react'
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form'

function PostForm({handleSubmit, post, pageId, handleChange}) {
    const formatDate = (date) => {
        let dateObj = new Date(date);

        return `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
    }

    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group>
                <Form.Label>Title:</Form.Label>
                <Form.Control type='text' value={post.title} name='title' onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Author:</Form.Label>
                <Form.Control type='text' value={post.author} name='author' onChange={handleChange}/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Content: </Form.Label>
                <Form.Control 
                    as="textarea" 
                    name="content" 
                    id="" 
                    cols="30" 
                    rows="10" 
                    value={post.content} 
                    onChange={handleChange}
                />
                
            </Form.Group>

            <Form.Group>
                <Form.Label>Tags: </Form.Label>
                <Form.Control type='text' value={post.tags} name='tags' onChange={handleChange}/> 
            </Form.Group>

            <Form.Group>
                {
                    pageId === 'update-post'
                        ? <p>Created at: {formatDate(post.date)}</p>
                        : ''
                }
            
            
                <button className={ pageId === 'update-post' ? 'btn btn-info' : 'btn btn-primary'}>{ pageId === 'update-post' ? 'Update' : 'Create'}</button>
            </Form.Group>
            
            
            <Form.Group>
                <Link to="/manage-posts">&#x2190; Back</Link>
            </Form.Group>
           
        </Form>
    )
}

export default PostForm