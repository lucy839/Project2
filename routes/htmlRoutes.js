var db = require("../models");
const Op = db.Sequelize.Op;
module.exports = function (app) {
  // Load market page
  app.get("/market", function (req, res) {
    db.Upload.destroy({
      where: {
        createdAt: { [Op.lt]: new Date(new Date() - 30 * 24 * 60 * 60 * 1000) }
      }
    }).then(function (res) {
      console.log(res);
      var query = {};
      db.Upload.findAll({
        where: query
        , include: [db.Image]
      }).then(function (dbUpload) {
        res.render("market", { Upload: dbUpload });
      });
      
    });
  });

  // load uploading page
  app.get('/upload', function (req, res) {
    res.render("upload");
  });

  // load trading page
  app.get('/trades', function (req, res) {
    res.render("trades");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
