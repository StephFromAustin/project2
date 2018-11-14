// DEPENDENCIES 
require ("dotenv").config(); //.env
const express = require("express"); //express  
const exphbs = require("express-handlebars"); //handlebars
const db = require("./models");
const app = express();
const PORT = process.env.PORT || 8080; // PORT

// MIDDLEWARE