//Use express 
var express = require("express")
var router = express.Router();

//Import the model to use database functions for interaction with mysql
var trade = require("../models/trade")

//ROUTES
//Root route will get all items in the trades table
router.get("/", function (req, res) {
  trade.available(function (data) {
      var tradeObj = {
          //"trades" keyword here will be used to pass data to index.handlebars
          items: data
      }
      console.log(tradeObj)
      //Send (or render) the burgObj to index
      res.render("index", tradeObj)
  })
})

//Route will get all items available from this specific user in the trades table
router.get("/items/:id", function (req, res) {
  trade.userItems("id", vals, function (data) {
    //Save user id to vals
    vals = req.param.id  

    var tradeObj = {
          //"trades" keyword here will be used to pass data to index.handlebars
          userItems: data
      }
      console.log(tradeObj)
      //Send (or render) the burgObj to index
      res.render("index", tradeObj)
  })
})
//This route will change available value after user clicks the trade button
router.put("/items/:id", function (req, res) {
  var condition = "id = " + req.params.id

  //Change available status for user's item
  trade.update(condition, function (result) {
      if (result.changedRows == 0) {
          return res.status(404).end();
      } else {
          res.status(200).end()
      }
  })
})

//This route will add items to the database
router.post("/items", function (req, res) {
  item.create([
      "burger_name", "devoured"
  ], [
          req.body.burgName, 0
      ], function (result) {
          res.json({ d: result.insertId })
      })
})


//Export routes via router
module.exports = router

//Routes

//Root route will get all burgers in the burgers table

// var db = require("../models");

// module.exports = function(app) {
//   // Get all examples
//   app.get("/api/examples", function(req, res) {
//     db.Example.available().then(function(dbExamples) {
//       res.json(dbExamples);
//     });
//   });

//   // Create a new example
//   app.post("/api/examples", function(req, res) {
//     db.Example.create(req.body).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
// };
