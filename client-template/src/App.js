import Container from 'react-bootstrap/Container'
import './App.css';
import ManagePosts from './pages/admin/ManagePosts';
import Home from './pages/Home';
import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';
import UpdatePost from './pages/admin/UpdatePost';
import CreatePost from './pages/admin/CreatePost';
import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav'


function App() {

  return (

    <Container className="App">
      <Router>
        <Header />
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/manage-posts" component={ManagePosts} />
            <Route path="/create-post" component={CreatePost} />
            <Route path="/update-post/:id" component={UpdatePost} />
          </Switch>
          <Footer />
      </Router>
    </Container>
  );
}

export default App;
