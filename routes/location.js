const locationData = require('../data/location');
const express = require('express');
const router = express.Router();
const dotenv = require('dotenv').config();

router.get("/", async(req, res) => {
    try {
        let ip = req.query.search_bar;
        let locationDetails = await locationData.getLocation(ip);
        let location = { latitude: locationDetails.ll[0], longitude: locationDetails.ll[1] };
        let mapKey = process.env.mapKey;
        let url = "https://maps.googleapis.com/maps/api/js?key=" + mapKey + "&callback=initMap";
        res.status(200).render('posts/map', { location: location, locationDetails: locationDetails, url: url });
    } catch (e) {
        res.status(500).render('posts/index', { msg: "Internal Server error! Please try again." + e });
    }
});

module.exports = router;