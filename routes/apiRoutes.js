// Dependencies
const db = require('../models')

// Routes
module.exports = function (app) {

    //------------------GET ROUTES-----------------------

    // GET route for getting the registry list
    app.get("/api/registry", function (req, res) {
        db.project2
            .findAll({})
            .then(results => res.json(results));
    });

    // GET route for getting the guest list
    app.get("/api/guest", function (req, res) {
        db.project2
            .findAll({})
            .then(results => res.json(results));
    });

    // GET route for getting the event list
    app.get("/api/main_event", function (req, res) {
        db.project2
            .findAll({})
            .then(results => res.json(results));
    });

    //--------------POST ROUTES------------------------

    // POST route for saving the registry list
    app.post("/api/registry", function (req, res) {
        db.project2
            .create(req.body)
            .then(results => res.json(results));
    });

    // POST route for saving the guest list
    app.post("/api/guest", function (req, res) {
        db.project2
            .create(req.body)
            .then(results => res.json(results));
    });

    // POST route for saving the event list
    app.post("/api/main_event", function (req, res) {
        db.project2
            .create(req.body)
            .then(results => res.json(results));
    });

    //---------------DELETE ROUTES-----------------------

    // DELETE route for deleting the registry list
    app.delete("/api/registry/:id", function (req, res) {
        db.project2
            .destroy({ where: { id: req.params.id } })
            .then(results => res.json(results));
    });

    // DELETE route for deleting the guest list
    app.delete("/api/guest/:id", function (req, res) {
        db.project2
            .destroy({ where: { id: req.params.id } })
            .then(results => res.json(results));
    });

    // DELETE route for deleting the event list
    app.delete("/api/main_event/:id", function (req, res) {
        db.project2
            .destroy({ where: { id: req.params.id } })
            .then(results => res.json(results));
    });

    //---------------PUT ROUTES----------------------------

    // PUT route for updating the registry list
    app.put("/api/registry", function (req, res) {
        db.project2
            .update(
                {
                    item: req.body.item, quantity: req.body.quantity
                },
                {
                    where: {
                        id: req.body.id
                    }
                })
            .then(results => res.json(results));
    });

    // PUT route for updating the guest list
    app.put("/api/guest", function (req, res) {
        db.project2
            .update(
                {
                    item: req.body.item, quantity: req.body.quantity
                },
                {
                    where: {
                        id: req.body.id
                    }
                })
            .then(results => res.json(results));
    });

    // PUT route for updating the event list
    app.put("/api/main_event", function (req, res) {
        db.project2
            .update(
                {
                    item: req.body.item, quantity: req.body.quantity
                },
                {
                    where: {
                        id: req.body.id
                    }
                })
            .then(results => res.json(results));
    });

};