import express from "express";
import morgan from morgan;
import bodyparser from 'body-parser'


//const app = express=();

app.use(morgan('dev'));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({exports:false}))








module.export=app;