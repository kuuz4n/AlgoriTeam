var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT Name FROM test WHERE AMOUNT > 1000", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});