const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express()

const homeRoute = require('./routes/home');
const userRoute = require('./routes/user');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoute);
app.use(homeRoute);

app.listen(3000);
