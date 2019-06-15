//Import ORM to create more specific functionality
orm = require("../config/orm")

//Trade object to hold all ORM functions
var trade = {
    //NAMED TABLEINPUT 'trades' TEMPORARILY
    //CAN CHANGE PARAMETER VALUE IF TABLE NAME DIFFERS
    //Selects all items with available column equaling true
    available: function(cb) {
        orm.selectItem("trades", "available", "true", function(res) {
            cb(res)
        })
    },
    //Select all items specific to the user
    userItems: function(cols, vals, cb) {
        orm.selectItem("trades", "userId", vals, function(res) {
        cb(res)
        })
    },
    //Add new item
    create: function(cols, vals, cb) {
        orm.addItem("trades", cols, vals, cb, function(res) {
            cb(res)
        })
    },
    //Change availability
    update: function(condition, cb) {
        orm.updateListing("trades", "requested = true", condition, function(res) {
            cb(res)
        })
    },
    //Delete listing on user request
    delete: function(condition, cb) {
        orm.deleteListing("trades", condition, cb, function(res) {
            cb(res);
        }
        )}
}

module.exports = trade;

