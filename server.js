'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('sem querer ser ansioso mas ja pode aomossar');
});

app.get('*', (req, res) => {
  res.send('oieeeeeeeeee!', 404);
});

app.listen(PORT, HOST);
