const locationData = require('../data/location');
const express = require('express');
const router = express.Router();

router.get("/", async(req, res) => {
    try {
        let ip = req.query.search_bar;
        let locationDetails = await locationData.getLocation(ip);
        let location = { latitude: locationDetails.ll[0], longitude: locationDetails.ll[1] };
        res.status(200).render('posts/map', { location: location, locationDetails: locationDetails });
    } catch (e) {
        res.status(500).render('posts/index', { msg: "Internal Server error! Please try again." + e });
    }
});

module.exports = router;