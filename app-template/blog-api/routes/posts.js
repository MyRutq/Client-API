const express = require('express'); 
const router = express.Router();
const Post = require('../models/Post');


// GET all posts
router.get('/', async (req, res) => {
    // res.send('a list of all posts');
    
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.json(error);
    }
});

//GET specific post
router.get('/:postId', async (req, res) => {
    // res.send('Specific post ' + req.params.postId)
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (error) {
        res.json(error);
    }
})

// Create new post
router.post('/', async (req, res) => {
    // console.log(req.body.title);

    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        tags: req.body.tags        
    });

    try {
        const savedPost = post.save()
        res.json(savedPost);
    } catch (error) {
        res.json(error);
    }
})

// Update post
router.patch('/:postId', async (req, res) => {
    // console.log(req.body);
    // console.log(req.params.postId);

    
    try {
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId},
            {$set: {
                    title: req.body.title,
                    content: req.body.content,
                    author: req.body.author,
                    tags: req.body.tags        
                }
            }
        );

        res.json(updatedPost);
    } catch (error) {
        res.json(error);
    }
})

// Delete post
router.delete('/:postId', async (req, res) => {
    console.log(req.params.postId);

    try {
        const deletedPost = await Post.deleteOne({_id: req.params.postId})
        res.json(deletedPost);
    } catch (error) {
        res.json(error);
    }
})

module.exports = router;
