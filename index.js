const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
//config
const keys = require('./config/keys');

const app = new express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
const routes = require('./routes');
routes(app);

//createServer
const port = process.env.PORT || 3090;
http.createServer(app).listen(port);
console.log('Listen ' + port);
