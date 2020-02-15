const dbConnection = require("./mongoConnection");

const getLocationCollection = async() => {

    const db = await dbConnection();
    _col = await db.collection("location");
    return _col;
};

/* Now, you can list your collections here: */
module.exports = {
    getLocationCollection
};