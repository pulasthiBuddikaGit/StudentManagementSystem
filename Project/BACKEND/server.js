//mern packages are assign to below variabels

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

//experss framwork has assign to app variable
const app = express();

require("dotenv").config();

//any kind of app work through a server
//me port eken giyoth tama me app eka wada karanne
 //when you put this app to internet it will use either 8070 port or available port at that time
const PORT = process.env.PORT || 8070;

//above declared dependencies has been used here
app.use(cors());
app.use(bodyParser.json());

//Assign mongodb url to below variable
const URL = process.env.MONGODB_URL;

//Mongo db configuration
//url,options used to connect to db
mongoose.connect(URL,{});

//if app is connected with db console will show below msg
const connection = mongoose.connection;
connection.once("open", function(){
    console.log("Mongodb Connection successful!");
})

const studentRouter = require("./routes/students");

//we use url to call the backend
//this 'student' use as a backend url
app.use("/student",studentRouter);

//to run this app in 8070 port
app.listen(PORT, function(){
    console.log('Server is up and running on port number:',PORT)
})
