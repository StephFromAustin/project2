// DEPENDENCIES 
    // DOTENV
require("dotenv").config();
    // KEYS
let keys = require("./keys.js");
    // EXPRESS 
const express = require("express"); 
    // SETS UP THE EXPRESS APP 
const db = require("./models");       // REQUIRES MODELS FOR SYNCING
const app = express();
    // PORT
const PORT = process.env.PORT || 8080; 
    // REQUIRED REQUESTS 
// let request = require('request');
// let maps = require ('maps');
// let calander = require ('calander');

// MIDDLEWARE
app.use(express.urlencoded({ extended:false })); // parse application 
app.use(express.json()); // parse application/ json
app.use(express.static("public")); // static directory 

// ROUTES
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// STARTING SERVER || LISTEN TO CLIENT REQUEST || NOTIFY IF LISTENING
db.sequelize.sync().then(function (){
    app.listen(PORT, function(){
        console.log("The app is listening on: http//localhost:" + PORT);
    });
});

module.exports = app;

