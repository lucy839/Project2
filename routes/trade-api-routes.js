// Routes


var db = require("../models");

module.exports = function (app) {
    // Get all available items for particular user
    app.get("/trades", function (req, res) {
        db.Upload.findAll({
            where: { available: true
             }
        }).then(function (dbUpload) {
            // res.json(item);
            res.render("trades", { Upload: dbUpload });
        });
    });
    var requested;

    app.post("/api/trade/:id", function (req, res) {
        //  app.post("/api/trade/:id/:userID", function (req, res) {

        db.Upload.update({
            requested: true,
            // tradeWith: userID
        }, {
                where: {
                    id: req.params.id
                }
            }).then(function () {
       
                res.redirect("/trades");
           

            });
    });
    
    // when trade is confirmed by both user...

    // Update availability status
    app.post("/api/availability/:id", function (req, res) {
        db.Upload.update({
            available: false
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(function () {
                res.redirect("/market");
            })
    });
}
