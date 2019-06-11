// Requiring our models
var db = require("../models");

module.exports = function (app) {
    // upload product
    app.post("/api/upload", function (req, res) {
        db.Upload.create({
            product_name: req.body.product_name,
            description: req.body.description,
            file_path: req.body.file_path
        }).then(function (dbUpload) {
            // res.json(dbUpload);
            res.redirect("/");
            // res.render("index",{Upload: dbUpload} );
        });   
    });
};