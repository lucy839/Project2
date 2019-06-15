const db = require("../models");
const passport = require("../config/passport")
const express = require("express")

module.exports = function (app) {
  //   // Get all examples
  //   app.get("/api/examples", function(req, res) {
  //     db.Example.findAll({}).then(function(dbExamples) {
  //       res.json(dbExamples);
  //     });
  //   });

  // Create a new example
  app.post("/api/new", function (req, res) {
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/login", passport.authenticate("local"), function(_req, res) {
 
    res.sendStatus(204);

  })

//   app.post('/api/login',
//   passport.authenticate('local', { successRedirect: '/example',
//                                    failureRedirect: '*',
//                                    failureFlash: true })
// );

  // app.post("/api/new/:name/:email/:password", function(req, res) {
  //   db.User.create({
  //     name: req.params.name,
  //     email: req.params.email,
  //     password: req.params.password
  //   }).then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
}
