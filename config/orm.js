const connection = require("../config/connection.js");

// function to turn ?s to a string in mySQL
function printQuestionMarks(num) {
  const arr = [];

  for (const i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// function to convert obj values into mySQL syntax
function objtoSql(ob) {
  const arr = [];

  // loop through keys and push the key value as a string INT arr
  for (const key in ob) {
    let value = ob[key];
    // skip all hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // strings with spaces get quotes
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  // return string array into single string
  return arr.toString();
}

// Object for all our SQL statement functions.
const orm = {
  selectAll: function(tableInput, cb) {
    const queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    const queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  
  
  updateOne: function(table, objColVals, condition, cb) {
    const queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    })
  },

  delete: function(table, condition, cb) {
    const queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;