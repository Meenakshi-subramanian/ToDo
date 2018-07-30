const express = require('express');
const bodyParser=require('body-parser');
const mongoose = require('mongoose');
const app= express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  next();
});
const todoroute = require('./routes/routes');
app.use('/todo', todoroute);
let port =1234;

let dev_db_url = 'mongodb://todouser:todo123@ds255451.mlab.com:55451/todoapp';
// let dev_db_url = 'mongodb://localhost:27017/todo';

const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB,{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



app.listen(port,() =>{
    console.log("server is up and running "+ port);
});
