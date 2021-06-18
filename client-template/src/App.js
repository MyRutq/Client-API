import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import ManagePosts from './pages/admin/ManagePosts';
import Home from './pages/Home';
import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';
import React, {useState, useEffect} from 'react'
import UpdatePost from './pages/admin/UpdatePost';
import CreatePost from './pages/admin/CreatePost';
import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Post from './pages/Post'


function App() {

  const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []); 

    const fetchPosts = async () => {
        try {
            const response = await fetch('http://localhost:5000/posts');
            if (!response.ok) {
                throw new Error('Server error: ' + response.status)
            }
            const data = await response.json();
            console.log(data);
            setPosts(data);
        } catch (error) {
            console.log(error);
        }
    }

    const deletePost = async (postId) => {
      console.log(postId)
        try {
            await fetch('http://localhost:5000/posts/' + postId, {
                    method: 'DELETE', // *GET, POST, PATCH, DELETE, etc.
            });


            fetchPosts();
        } catch (error) {
            console.log(error);
        }
    }


  return (

    <Container >
      <Router>
        <Nav />
        <Header />
          <Switch>
            
            <Route path="/" exact>
              <Home posts={posts} />
            </Route>

            <Route path="/manage-posts">
              <ManagePosts posts={posts} deletePost={deletePost}/>
            </Route>

            <Route path="/create-post" component={CreatePost} />
            <Route path="/update-post/:id" component={UpdatePost} />
            <Route path="/post/:id" component={Post} />
           
          </Switch>
          <Footer />
      </Router>
    </Container>
  );
}

export default App;
