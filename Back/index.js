const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.json("Все гуд");
  console.log(res);
});

app.listen(3000, console.log("Good"));
