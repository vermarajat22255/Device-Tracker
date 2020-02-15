//Message Sender Service Worker

const express = require('express');
const router = express.Router();
const messageData = require('../data/message');

router.get('/', (req, res) => {
    res.status(500).render('posts/index', { msg: "Invalid Method" });
});

router.post('/', (req, res) => {
    console.log(req);
    const message = req.body.message;
    const phone_Number = req.body.phone_number;
    const subject = req.body.subject;
    console.log("Message = " + message);
    console.log("Number = " + phone_Number);
    console.log("subject = " + subject);
    try {
        let publishTextPromise = messageData.sendMessage(message, phone_Number, subject);
        publishTextPromise.then(
            function(data) {
                res.status(200).render('posts/index', { msg: "We have send your Message. Message Id: " + data.MessageId });
            });
    } catch (e) {

        res.status(500).render('posts/index', { msg: "Error occured while sending your message: " + e });
    }

});

module.exports = router;