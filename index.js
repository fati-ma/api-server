'use strict';

// require('dotenv').config();

const mongoose = require('mongoose');
const server = require('./lib/server.js');

const MONGODB_URI = 'mongodb+srv://fatima:0000@cluster0.6imvb.mongodb.net/api_todo?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    server.start();
  })
  .catch((err) => console.log(err.message));
