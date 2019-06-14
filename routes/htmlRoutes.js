var db = require("../models");

module.exports = function (app) {
  // Load market page

  app.get("/market", function(req, res) {
    var query = {};
	
	
    db.Upload.findAll({
      where: query
			, include: [db.Image]
    }).then(function (dbUpload) {
      res.render("market", { Upload: dbUpload });
    });
    db.Example.findAll({}).then(function(dbExample) {
      res.render("market", {
        example: dbExample
      });
    });
  });

  // uploading page
    app.get('/upload', function(req, res) {
        res.render("upload");
    });
  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
