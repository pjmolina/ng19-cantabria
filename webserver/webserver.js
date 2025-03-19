var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("hello world");
});

app.get("/pizzas", function (req, res) {
  res.json([
    { name: "margarita", price: 12 },
    { name: "margarita", price: 12 },
    { name: "margarita", price: 12 },
  ]);
});

app.listen(3000);
