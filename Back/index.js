const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send("Все гуд");
});

app.listen(3000, console.log("Good"));
