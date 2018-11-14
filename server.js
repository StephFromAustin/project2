// DEPENDENCIES 
require ("dotenv").config(); //.env
const express = require("express"); //express  
const exphbs = require("express-handlebars"); //handlebars
    // SETS UP THE EXPRESS APP 
const db = require("./models"); // requires models for syncing 
const app = express();
const PORT = process.env.PORT || 8080; // PORT

// MIDDLEWARE
app.use(express.urlencoded({ extended:false })); // parse application 
app.use(express.json()); // parse application/ json
app.use(express.static("public")); // static directory 