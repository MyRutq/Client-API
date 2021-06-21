import React from 'react'
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import AngryBaby from './img/AngryBaby2.png';
import { motion } from 'framer-motion'

function PostForm({handleSubmit, post, pageId, handleChange, validated}) {
    const formatDate = (date) => {
        let dateObj = new Date(date);

        return `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
    }

    const TRANSITION_TIME_ROTATE_S = 2;

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group as={Col} md="4">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control type='text' value={post.title || ''} name='title' onChange={handleChange} required placeholder="Warm Holiday" />
                    <Form.Control.Feedback type="invalid">
                    Please provide a title.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4">
                    <Form.Label>Author:</Form.Label>
                    <Form.Control type='text' value={post.author || ''} name='author' onChange={handleChange} placeholder="Steven Jackson" required/>
                    <Form.Control.Feedback type="invalid">
                        Please provide a author.
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Form.Group>
                <Form.Label>Content: </Form.Label>
                <Form.Control 
                    as="textarea" 
                    name="content" 
                    id="" 
                    cols="30" 
                    rows="10" 
                    value={post.content || ''} 
                    onChange={handleChange}
                    placeholder="Once upon a time......."
                    required
                />
                <Form.Control.Feedback type="invalid">
                    Please provide some content.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Row>
            <Form.Group as={Col} md="6">
                <Form.Label>Tags: </Form.Label>
                <Form.Control type='text' value={post.tags || ''} name='tags' onChange={handleChange} placeholder="Holiday" required/> 
                <Form.Control.Feedback type="invalid">
                        Please provide at least one tag.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4">
                   { validated === true ?
                   <motion.div 
                        animate={{ rotate: [-6, 0, 6] }}  
                        transition={{
                            rotate: { repeat: Infinity, duration: TRANSITION_TIME_ROTATE_S },
                        }}>
                    <Image src={AngryBaby} alt="AngryBaby"  />
                    </motion.div>
                    : ""
                    }
                    
                </Form.Group>
            </Form.Row>
            <Form.Group>
                {
                    pageId === 'update-post'
                        ? <p>Created at: {formatDate(post.date)}</p>
                        : ''
                }
            
            
                <Button variant={ pageId === 'update-post' ? 'info' : 'success'} type="submit">{ pageId === 'update-post' ? 'Update' : 'Create'}</Button>
            </Form.Group>
            
            
            <Form.Group>
                <Link to="/manage-posts">&#x2190; Back</Link>
            </Form.Group>
           
        </Form>
    )
}

export default PostForm