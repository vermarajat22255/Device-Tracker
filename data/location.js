const dbConnection = require("../config/getCollection");
const geoip = require('geoip-lite');

const getLocation = async function getLocation(ip) {
    try {
        console.log("Now getting data from GeoIp and saving it to DB...");
        let loc = geoip.lookup(ip);
        let locationCollection = await dbConnection.getLocationCollection();
        const insertInfo = await locationCollection.insertOne(loc);
        return loc;
    } catch (e) {
        throw e;
    }
}
module.exports = {
    getLocation
}