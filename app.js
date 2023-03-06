const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/index')
const app = express();

app.use(bodyParser.json());

app.use("/v1", userRouter );

module.exports = app;