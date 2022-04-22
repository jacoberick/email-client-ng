const express = require("express");
const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  multipleStatements: true,
});

// Connect
db.connect((err) => {
  if (err) throw err;
  console.log("MySql Connected...");
  let sql = "CREATE DATABASE IF NOT EXISTS emailclientdb";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Database is available.");
  });
});

const app = express();

app.get("/test", (req, res) => {});

app.listen("3000", () => {
  console.log("Server started on port 3000");
});
