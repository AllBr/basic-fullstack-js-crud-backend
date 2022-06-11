const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// import routes
const postRoutes = require('./routes/post');
const authRoutes = require('./routes/auth');

// app
const app = express();

// db
mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err));

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

// route middleware
app.use('/api', postRoutes);
app.use('/api', authRoutes);

// port
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
