const { faker } = require("@faker-js/faker");
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: '*********'
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// home route
app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in databases");
  }
});

// show users route
app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      res.render("showusers.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in databases");
  }
});

// edit route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in databases");
  }
});

// UPDATE ROUTE
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newusername } = req.body;
  let q = `SELECT * FROM user WHERE id = '${id}'`;

  connection.query(q, (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Some error in databases");
    }

    let user = result[0];

    if (formPass != user.password) {
      return res.send("WRONG PASSWORD!!");
    } else {
      let q2 = `UPDATE user SET username = '${newusername}' WHERE id = '${id}'`;
      connection.query(q2, (err, result) => {
        if (err) {
          console.log(err);
          return res.send("Error updating user");
        }
        res.redirect("/user");
      });
    }
  });
});

// serve form to add user
app.get("/user/new", (req, res) => {
  res.render("new.ejs");
});

// add user to database
app.post("/user", (req, res) => {
  let { email, username, password } = req.body;
  let id = faker.string.uuid();
  let q = `INSERT INTO user (id, username, email, password) VALUES ('${id}', '${username}', '${email}', '${password}')`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      res.redirect("/user");
    });
  } catch (err) {
    console.log(err);
    res.send("Error adding user to database");
  }
});

// serve form to delete user
app.get("/user/delete", (req, res) => {
  res.render("delete.ejs");
});

// verify and delete user
app.delete("/user", (req, res) => {
  let { email, password: formPass } = req.body;
  let q = `SELECT * FROM user WHERE email = '${email}'`;

  connection.query(q, (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Some error in databases");
    }

    if (result.length === 0) {
      return res.send("USER NOT FOUND!!");
    }

    let user = result[0];

    if (formPass != user.password) {
      return res.send("WRONG PASSWORD!!");
    } else {
      let q2 = `DELETE FROM user WHERE email = '${email}'`;
      connection.query(q2, (err, result) => {
        if (err) {
          console.log(err);
          return res.send("Error deleting user");
        }
        res.redirect("/user");
      });
    }
  });
});

app.listen("8080", () => {
  console.log("Server is running on port 8080");
});
