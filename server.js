'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send("Ta rodando, meu querido");
});

app.get('*', (req, res) => {
  res.send("não achou nenhuma parada nessa aplicação", 404);
});

app.listen(PORT, HOST);
