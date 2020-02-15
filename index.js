const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const static = express.static(__dirname + "/public");
const configRoutes = require("./routes");
const AWS = require('aws-sdk');
const dotenv = require('dotenv').config();

AWS.config.update({
    region: 'us-east-1',
    accessKeyId: 'AKIA2O7HUO6MXLMVUNSW',
    secretAccessKey: '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'
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