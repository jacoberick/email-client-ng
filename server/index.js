const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();
const passport = require("passport");
const LocalStrategy = require("passport-local");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const { nextTick } = require("process");
const { json } = require("body-parser");
const app = express();

// bcrypt
const saltRounds = 10;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// connecting to database
const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: "emailclientdb",
  multipleStatements: true,
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySql Connected.");
  let sql = `CREATE DATABASE IF NOT EXISTS emailclientdb; 
    CREATE TABLE IF NOT EXISTS users (id VARCHAR(255), first_name VARCHAR(255), 
    last_name VARCHAR(255), email VARCHAR(255), password VARCHAR(255));
    CREATE TABLE IF NOT EXISTS people (id VARCHAR(255), user_id VARCHAR(255), first_name VARCHAR(255), last_name VARCHAR(255), email VARCHAR(255), is_subscribed BOOLEAN,  created_at VARCHAR(255));
    `;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Database is connected and ready.");
  });
});

// initialise strategy for passport
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    function verify(username, password, cb) {
      db.query(
        "SELECT * FROM users WHERE email = ?",
        [username],
        function (err, user) {
          if (err) {
            return cb(err);
          }
          if (!user) {
            return cb(null, false, {
              message: "No user found ",
            });
          }
          bcrypt.compare(password, user[0].password, (err, result) => {
            if (err) throw err;
            return result
              ? cb(null, user)
              : cb(null, false, {
                  message: "No user found with those credentials.",
                });
          });
        }
      );
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

// requests

// signup POST
app.post("/api/signup", async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  const success = true;
  const id = crypto.randomBytes(16).toString("hex");

  db.query(`SELECT * FROM users WHERE email = '${email}'`, (err, result) => {
    if (err) throw error;
    if (result.length > 0) {
      res.json({
        success: false,
        message: "A user is already associated with this email address.",
      });
      return;
    }

    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) throw err;
      let sql = `INSERT INTO users (id, first_name, last_name, email, password) VALUES ('${id}', '${first_name}', '${last_name}', '${email}', '${hash}');`;
      db.query(sql, (err, user) => {
        if (err) throw err;
        res.json({ id, first_name, last_name, email, success });
      });
    });
  });
});

// login POST
app.post("/api/login", passport.authenticate("local", {}), function (req, res) {
  const { email } = req.body;
  db.query(
    `SELECT id, first_name, last_name, email FROM users WHERE email = '${email}'`,
    (err, result) => {
      if (err) throw error;
      let accountInfo = result[0];
      accountInfo.success = true;
      res.json({ ...accountInfo });
    }
  );
});

// add person POST
app.post("/api/people/add", (req, res) => {
  const { first_name, last_name, email, user_id, created_at } = req.body;
  const id = crypto.randomBytes(16).toString("hex");
  let sql = `INSERT INTO people (id, user_id, first_name, last_name, email, is_subscribed, created_at) 
  VALUES ('${id}', '${user_id}', '${first_name}', '${last_name}', '${email}', 1, '${created_at}');`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    db.query(
      `SELECT * from people WHERE user_id = '${user_id}'`,
      (err, result) => {
        if (err) throw err;
        res.sendStatus(201);
      }
    );
  });
});

// update person PUT
app.put("/api/people/update", (req, res) => {
  const { first_name, last_name, email, cont_id } = req.body;
  db.query(
    `UPDATE people SET first_name = '${first_name}', last_name = '${last_name}', email = '${email}' WHERE id = '${cont_id}'`,
    (err, result) => {
      if (err) throw err;
      res.sendStatus(201);
    }
  );
});

// people GET
app.get("/api/people", (req, res) => {
  let user_id = req.query.id;
  db.query(
    `SELECT * FROM people WHERE user_id = '${user_id}'`,
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
});

// get individual person(contact)
app.get("/api/people/id", (req, res) => {
  let cont_id = req.query.id;
  db.query(`SELECT * FROM people WHERE id = '${cont_id}'`, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// delete individual person(contact)
app.delete("/api/people/id", (req, res) => {
  let { cont_id } = req.body;
  db.query(`DELETE FROM people WHERE id = '${cont_id}'`, (err, result) => {
    if (err) throw err;
    res.sendStatus(201);
  });
});

app.listen("3000", () => {
  console.log("Server started on port 3000");
});
