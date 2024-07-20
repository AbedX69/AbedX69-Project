// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const User = require('./models/User');
const authMiddleware = require('./authMiddleware');

const app = express();
const port = 5000;
const jwtSecret = 'your_jwt_secret_key';

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (err) => {
  console.error('Connection error:', err);
});
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Sign up route
app.post('/api/signup', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  console.log('Received signup request:', req.body);

  try {
    if (!firstName || !lastName || !email || !password) {
      throw new Error('All fields are required');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ firstName, lastName, email, password: hashedPassword });
    await user.save();
    console.log('User created:', user);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// Sign in route
app.post('/api/signin', async (req, res) => {
  const { email, password } = req.body;
  console.log('Received signin request:', req.body);

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log('Invalid credentials: User not found');
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Invalid credentials: Password mismatch');
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1h' });
    console.log('User signed in:', user);
    res.json({ token });
  } catch (error) {
    console.error('Error signing in:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// Profile route
app.get('/api/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    console.error('Error fetching user profile:', error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
