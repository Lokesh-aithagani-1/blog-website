import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import BlogPostList from './components/BlogPostList';
import BlogPostDetail from './components/BlogPostDetail';


function App() {
  const navbarStyle = {
    backgroundColor: '#808080',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '10px',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '10px',
  };

  return (
    <Router>
      <div style={navbarStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/login" style={linkStyle}>Login</Link>
        <Link to="/posts" style={linkStyle}>Quotes</Link>
      </div>

      <div style={{ marginTop: '20px', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts" element={<BlogPostList/>} />
          <Route path="/posts/:id" element={<BlogPostDetail />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
