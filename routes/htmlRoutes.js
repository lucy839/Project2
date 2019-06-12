var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    // db.Example.findAll({}).then(function(dbExamples) {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     examples: dbExamples
    //   });
    // });
    
    db.Upload.findAll({
      // where: query
      // edit needed work with Steven
      // , include: [db.User]
    }).then(function (dbUpload) {
      // res.json(dbUpload);
      res.render("index", { Upload: dbUpload });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
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
