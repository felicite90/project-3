const express = require('express');
const morgan = require('morgan');
const bodypaser=require('body-parser')



const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))






module.exports = app;