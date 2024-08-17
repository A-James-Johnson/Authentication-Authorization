import React, { useState } from "react";
import axios from 'axios';

function SignUp() {
  const [signupData, setSignupData] = useState({
    email: '',
    password: '',
    user: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9000/signup', signupData);
      window.location.href = '/new';
      console.log(response.data);
      
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Fitpulse Signup</h2>
      <form >
        <div className="usergroup">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="user"
            type="text"
            value={signupData.user}
            onChange={handleChange}
            required
          />
        </div>
        <div className="emailgroup">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={signupData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="passgroup">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={signupData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="signupbutton" type="submit" onClick={handleSubmit}>Signup</button>
      </form>
      <span>Already have an account? <a href="/login">Login</a></span>
    </div>
  );
}

export default SignUp;
