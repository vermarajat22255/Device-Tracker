const dbConnection = require("../config/getCollection");
const underScore = require("underscore");

const getHistory = async function getHistory(queryEntries, queryCountry) {
    //This service takes in 2 params to apply filter on the data retrieved
    // if the query is not supplied it by default provide all the data
    try {
        if (queryCountry) queryCountry = queryCountry.trim().toUpperCase(queryCountry);
        const locationCollection = await dbConnection.getLocationCollection();
        locations = await locationCollection.find({}).toArray();
        if (!isNaN(queryEntries) && queryEntries && !queryCountry) {
            locations = underScore.first(locations, queryEntries);
        } else if (typeof queryCountry === "string" && queryCountry && !queryEntries) {
            locations = underScore.filter(locations, (item) => {
                return item.country === queryCountry;
            });
        } else if (queryEntries && queryCountry && !isNaN(queryEntries) && typeof queryCountry === "string") {
            locations = underScore.filter(locations, (item) => {
                return item.country === queryCountry;
            });
            locations = underScore.first(locations, queryEntries);
        }
        return locations;
    } catch (e) {
        throw e;
    }
};
module.exports = {
    getHistory
}