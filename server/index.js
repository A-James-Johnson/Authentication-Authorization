const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { Signup } = require('./schema.js');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
async function connectToDb() {
  try {
    await mongoose.connect('mongodb+srv://James321485:James321485@cluster0.835jjax.mongodb.net/Aunthandauth?retryWrites=true&w=majority&appName=Cluster0');
    console.log('DB connection established');
  } catch (error) {
    console.error('DB connection error:', error);
  }
}
connectToDb();

// Signup endpoint
app.post('/signup', async (req, res) => {
  try {
    const { email, password, user } = req.body;
    // Check if user already exists
    const existingUser = await Signup.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    // Create a new user
    const newUser = new Signup({ email, password, user });
    await newUser.save();
    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    console.error('Signup failed', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  try {

    // const { username, password } = req.body;
    console.log("log",req.body);
    // Find the user in the database
    const user = await Signup.findOne({user:req.body.username},{password:req.body.password});
    console.log(user);
    if (user) {
      // User found, send success response
      res.status(200).json({ message: 'Login successful' });
    } else {
      // User not found, send error response
      res.status(401).json({ message: 'Username or password is incorrect' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Server
const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
