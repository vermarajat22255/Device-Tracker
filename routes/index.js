const locationRoutes = require('./location');
const messageRoutes = require('./message');
const historyRoutes = require('./history');
const path = require('path');

const constructorMethod = app => {
    app.use("/history", historyRoutes);
    app.use("/message", messageRoutes);
    app.use("/location", locationRoutes);
    app.use("/", (req, res) => {
        res.status(200).render('posts/index');
    });

    app.use("*", (req, res) => {
        res.status(404).json({ "error": "Invalid Path" });
    });
};

module.exports = constructorMethod;