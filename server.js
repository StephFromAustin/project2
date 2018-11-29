// DEPENDENCIES 
//require ("dotenv").config(); //.env
const express = require("express"); //express  

    // SETS UP THE EXPRESS APP 
const db = require("./models"); // requires models for syncing 
const app = express();
const PORT = process.env.PORT || 8080; // PORT

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

// this is a test for github