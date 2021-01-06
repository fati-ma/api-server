'use strict';
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const timestamp = require('../middleware/timestamp.js');
const logger = require('../middleware/logger.js');
const notFound = require('../middleware/404.js');
const errorHandler = require('../middleware/500.js');
const v1Router = require('../routes/v1.js');
require('dotenv').config();

app.use(morgan('dev'));
app.use(cors());

const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(timestamp);
app.use(logger);
//api router
app.use(v1Router);

app.get('/error', (req, res) => {
  throw new Error('a test error');
});

app.use('*', notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: () => {
    app.listen(PORT, () => {
      console.log(`Listening to PORT ${PORT}`);
    });
  },
};