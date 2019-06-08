// Requiring our models
var db = require("../models");

module.exports = function (app) {
    // list items
    app.get("/api/upload", function (req, res) {
        var query = {};
        // edit needed work with Steven
        if (req.query.user_id) {
            query.UserId = req.query.user_id;
        }
        // 1. Add a join here to include all of the Authors to these posts
        db.Upload.findAll({
            where: query
            // edit needed work with Steven
            // , include: [db.User]
        }).then(function (dbUpload) {
            res.json(dbUpload);
        });
    });

    // upload product
    app.post("/api/upload", function (req, res) {
        db.Upload.create({
            product_name: req.body.product_name,
            description: req.body.description,
            file_path: req.body.file_path
        }).then(function (upload) {
            res.json(upload);
        });
    });
};