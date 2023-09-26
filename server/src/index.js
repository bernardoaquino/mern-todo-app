const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const router = require('./router');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use(router);

// Connect to the database and start the server
async function startServer() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connection to MongoDB established successfully');
    const port = process.env.PORT || 8080;
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

startServer();
