// Double check this connection setup if app doesn't work
const connection = require("./connection.js");

// Function to create a question mark for each value that is added to the query string
function questionMark(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Function for selecting all rows and columns from the table
const orm = {
  selectAll: function (tableInput, cb) {
    const queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
  // Function for creating a new row
  insertOne: function (table, columns, values, cb) {
    let queryString = "INSERT INTO " + table;
    queryString += "(";
    queryString += columns.toString();
    queryString += ") VALUES (";
    queryString += questionMark(values.length);
    queryString += ") ";
    console.log(queryString);
    connection.query(queryString, values, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  // Function for updating a value
  updateOne: function (table, column, value, id, cb) {
    const queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
    connection.query(queryString, [table, column, value, id], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
};
// Export the module for model (burger.js).
module.exports = orm;
