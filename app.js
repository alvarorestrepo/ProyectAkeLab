const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");

//Settings
app.set("port", 4000);
app.set("views", path.join(__dirname), "/src");

//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//Routes
app.use(require("./route/index"));

// 404 handler
app.use((req, res, next) => {
  res.status(404).send("404 Not found");
});

//Statics
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
