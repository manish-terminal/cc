require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("manish");
});

app.get("/login", (req, res) => {
  res.send("<h1> please login at chai aur code</h1>");
});
app.get("/chai", (req, res) => {
  res.send("<h2>Chai pilo friends</h2>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
