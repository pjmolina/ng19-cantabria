var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("hello world");
});

app.get("/pizzas", function (req, res) {
  res.json([
    { name: "margarita", price: 12 },
    { name: "piña", price: 13 },
    { name: "barbacoa", price: 14 },
  ]);
});

console.log("Escuchando en el puerto 3000");
app.listen(3000);
