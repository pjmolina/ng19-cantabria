var express = require("express");
var cors = require("cors");
var app = express();

var corsOptions = {
  origin: "http://localhost:4200",
};

// app.use(cors(corsOptions));

app.get("/", cors(corsOptions), function (req, res) {
  res.send("hello world");
});

app.get("/pizzas", cors(corsOptions), function (req, res) {
  res.json([
    { name: "margarita", price: 12 },
    { name: "piña", price: 13 },
    { name: "barbacoa", price: 14 },
  ]);
});

console.log("Escuchando en el puerto 3000");
app.listen(3000);

// CORS
// http://localhost:4200
// http://localhost:3000
