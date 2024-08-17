import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:9000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      
      if (response.ok) {
        
        window.location.href = '/fitpulse';
      } else {
        // Handle login failure
        alert(data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <h2>Fitpulse Login</h2>
      <form id="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button className="loginbutton" type="button" onClick={handleLogin}>Login</button>
      </form>
      <span>Don't have an account? <a className="signup" href="/Signup">Signup</a></span>
    </div>
  );
}

export default Login;
