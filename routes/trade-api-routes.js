// Routes


var db = require("../models");

module.exports = function (app) {
    // Get all available items
    app.get("/trade", function (req, res) {
        db.Index.findAll({
            // where: { available: true }
        }).then(function (dbUload) {
            res.json(item);
            res.render("trade", { Upload: dbUpload });
        });
    });
    var requested;
    app.post("/api/trade/:id", function (req, res) {
        // console.log(req.params.id);
        db.Upload.update({
            requested: true
        }, {
                where: {
                    id: req.params.id
                }
            }).then(function () {
                // console.log(res);
                requested = req.params.id;
                db.Upload.findAll({
                    // where: { available: true }
                }).then(function (item) {
                    // res.json(item);
                    res.render("trades", { Upload: item });
                });
                // res.render("trades");
                
            });
    });
  
    app.post("api/trade/tradeWith/:id", function (req, res) {
        console.log(requested);
        // db.Upload.update({
        //     tradeWith: req.params.id
        // }, {
        //         where: {
        //             id: requested
        //         }
        //     }).then(function (res) {
        //         // console.log(res);
        //         res.render("market");
        //     });
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
