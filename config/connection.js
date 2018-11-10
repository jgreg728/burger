const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "ixqxr3ajmyapuwmi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "wqtz6pircjj5rvu8",
  password: "mr21c0mofztbbphc",
  database: "r1pa8hpxbz7easjn"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
