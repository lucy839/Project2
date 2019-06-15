// Routes


var db = require("../models");

module.exports = function (app) {
    // Get all available items
    app.get("/trades", function (req, res) {
        db.Upload.findAll({
            where: { available: true }
        }).then(function (item) {
            res.json(item);
            // res.render()
        });
    });

    var availability = false


    // Update availability status
    app.put("/api/availability/:id", function (req, res) {
        db.Upload.update(availability, { where: { id: req.params.id } })
            .then(function (item) {
                res.json(item);
            })
    });

    // Delete a lisiting by id
    app.delete("/api/destroy/:id", function (req, res) {
        db.Example.destroy({ where: { id: req.params.id } })
            .then(function (item) {
                res.json(item);
            });
    });
}
