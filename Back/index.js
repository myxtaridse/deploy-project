const express = require("express");
const { json } = require("./db");
const app = express();

app.use("/", (req, res) => {
  res.send(json);
});

app.listen(3000, console.log("Good"));
