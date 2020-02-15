const historyData = require('../data/history');
const express = require('express');
const router = express.Router();

router.get("/", async(req, res) => {
    try {
        let queryEntries = req.query.entries;
        let queryCountry = req.query.country;
        let history = await historyData.getHistory(queryEntries, queryCountry);
        res.status(200).render('posts/history', { history: history });
    } catch (e) {
        res.status(500).render('posts/index', { msg: " Internal Server error" + e });
    }
});

module.exports = router;