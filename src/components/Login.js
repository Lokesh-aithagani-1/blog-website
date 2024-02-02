import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import './styles.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
    
  const handleLogin = async () => {
   
    try {
        const response = await axios.post('http://localhost:3001/api/auth/login', {
          username,
          password,
        });
  
        const { data } = response;
  
        
        if (data) {
          const { token } = data;
  
          console.log('Token:', token);
        } else {
          console.error('Login failed. No data received from the server.');
        }
      } catch (error) {
        console.error('Login error:', error.message);
      }
      if (username.trim() !== '') {
        navigate(`/posts?username=${username}`);
      } else {
        alert('Please enter a username');
      }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="form-group">
        <label className="label">Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
        />
      </div>
      <div className="form-group">
        <label className="label">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
      </div>
      <button type="button" onClick={handleLogin} className="button">
        Login
      </button>
    </div>
  );
};

export default Login;
