const http = require('http');
const env = process.env;
const express = require('express');
const app = express();

const routerGeneralController = require('./routerGeneralController.js');

app.use(express.static('static/dist'));

routerGeneralController(app);

app.listen(env.PORT || 3000, () => {
  console.log(`Application worker ${process.pid} started...`);
});