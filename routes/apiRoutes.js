// Routes


var db = require("../models");

module.exports = function(app) {
  // Get all available items
  app.get("/", function(req, res) {
    db.Index.findAll({
        where: { available: true } 
    }).then(function(item) {
      res.json(item);
    });
  });

  var availability = {
      availble: false
  }
  // Update availability status
  app.put("/api/availability/:id", function(req, res) {
    db.Upload.update(availability, {
        where: { id: req.params.id }
    }.then(function(item) {
      res.json(item);
    })
    })
}
  // Delete a lsiting by id
  app.delete("/api/destroy/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } })
    .then(function(item) {
      res.json(item);
    });
  });
}
