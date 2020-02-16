const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const static = express.static(__dirname + "/public");
const configRoutes = require("./routes");
const AWS = require('aws-sdk');
const dotenv = require('dotenv').config();

AWS.config.update({
    region: process.env.region,
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey
});

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/public", static);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

configRoutes(app);

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});