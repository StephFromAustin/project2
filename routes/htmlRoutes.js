// Dependencies
// =============================================================
let path = require("path");
let current = require("../public/login.js");

// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/create", function (req, res) {
    //redirects users to the home page if they are not logged in
    if (current[2] == false) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
      return;
    }
      res.sendFile(path.join(__dirname, "../public/createEvent.html"));
  });

  app.get("/events", function (req, res) {
    //redirects users to the home page if they are not logged in
    if (current[2] == false) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
      return;
    }
    res.sendFile(path.join(__dirname, "../public/myEvents.html"));
  });

  app.get("/signup", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/about", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/aboutUs.html"));
  });
};
