const path = require("path");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");


// Connect
const app = express();
const indexRoutes = require("./routes/index");
mongoose.connect("mongodb://localhost/crud-mongo", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log("success"))
    .catch(err => console.log("error"));


// Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));


// Routes
app.use("/", indexRoutes);


// Start server (type: npm run dev)
app.listen(app.get("port"), () =>
{
    console.log("Server on port " + app.get("port"));
});