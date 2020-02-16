const MongoClient = require("mongodb").MongoClient;
const dotenv = require('dotenv').config();

const mongoConfig = {
    "serverUrl": process.env.serverUrl,
    "database": process.env.database
};

let _connection = undefined;
let _db = undefined;

module.exports = async() => {
    if (!_connection) {
        _connection = await MongoClient.connect(mongoConfig.serverUrl);
        _db = await _connection.db(mongoConfig.database);
    }
    return _db;
};