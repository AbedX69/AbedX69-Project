// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const multer = require('multer');
const User = require('./models/User');
const Product = require('./models/Product');
const Counter = require('./models/Counter');
const authMiddleware = require('./authMiddleware');

const app = express();
const port = 5000;
const jwtSecret = 'your_jwt_secret_key';

app.use(bodyParser.json());
app.use(cors());

// Serve static files from the "uploads" directory
app.use('/uploads', express.static('uploads'));

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

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

// Other routes...

// Add New Product route
app.post('/api/products', authMiddleware, upload.array('images', 5), async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    const images = req.files.map(file => file.path);

    const counter = await Counter.findByIdAndUpdate(
      { _id: 'productId' },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );

    const productId = counter.seq;

    const product = new Product({
      productId,
      name,
      description,
      price,
      category,
      images
    });
    await product.save();

    res.status(201).json({ message: 'Product added successfully', productId: product.productId });
  } catch (error) {
    console.error('Error adding product:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// Fetch Product Details route
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findOne({ productId: req.params.id });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error('Error fetching product details:', error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
