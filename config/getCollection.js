const dbConnection = require("./mongoConnection");
const dotenv = require('dotenv').config();

const getLocationCollection = async() => {

    const db = await dbConnection();
    _col = await db.collection(process.env.collectionName);
    return _col;
};

/* Now, you can list your collections here: */
module.exports = {
    getLocationCollection
};