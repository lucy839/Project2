//Import established connection
var connection = require("./connection")

//Generates question marks for MySQL query
//Since we need question marks in our query (to avoid sequel injection), this function will determine how many are needed and return them as a string
function printQstMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }
}

//ORM object
var orm = {
    //Select single item for trade
    selectItem: function (tableInput, cols, vals, cb) {
        var queryString = `SELECT * FROM ${tableInput} WHERE ${cols} = ${vals}`
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result)
        })
    },
    //Insert new item for trade
    addItem: function (tableInput, cols, vals, cb) {
        var queryString = "INSERT INTO " + tableInput;

        queryString += " (" + cols.toString() + ") "
        queryString += "VALUES (" + printQstMarks(vals.length) + ") "


        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err
            }

            cb(result)
        })
    },
    //Change value of availability
    updateListing: function (tableInput, objColVals, vals, cb) {
        var queryString = "UPDATE " + tableInput

        queryString += " SET " + objColVals
        queryString += " WHERE " + condition

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err
            }

            cb(result)
        })
    },
    //Delete listing
    deleteListing: function (tableInput, condition, cb) {
        var queryString = "DELETE FROM " + tableInput
        queryString += "WHERE " + condition

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err
            }

            cb(result)
        })
    }
}

//Export ORM
module.exports = orm
