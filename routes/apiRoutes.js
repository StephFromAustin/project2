// Dependencies
const db = require('../models')

// Routes
module.exports = function (app) {

    // GET route for getting the registry list
    app.get("/api/registry", function (req, res) {
        db.project2
            .findAll({})
            .then(results => res.json(results));
    });

    // POST route for saving the registry list
    app.post("/api/registry", function (req, res) {
        db.project2
            .create(req.body)
            .then(results => res.json(results));
    });

    // DELETE route for deleting the registry list
    app.delete("/api/registry/:id", function (req, res) {
        db.project2
            .destroy({ where: { id: req.params.id } })
            .then(results => res.json(results));
    });

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
};