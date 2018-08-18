const http = require('http');
const express = require('express');
const morgan = require('morgan');
const {
  port,
  env
} = require('../config/env.config');

const app = express();

// set logger for requests
app.use(morgan('dev'));
app.use(express.static('build'));

const server = http.createServer(app);

server.listen(port, err => {
  if (err) {
    throw err;
  }

  // eslint-disable-next-line no-console
  console.log(`[${new Date().toISOString()}]: Server started at port ${port} in "${env}" environment`);
});
