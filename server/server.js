// server/server.js (Corrected)
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // <--- DÒNG NÀY RẤT QUAN TRỌNG VÀ PHẢI NẰM TRƯỚC PHẦN ROUTES

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Import Routes
const todoRoutes = require('./routes/todoRoutes');

// Use Routes
app.use('/api/todos', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// thay doi