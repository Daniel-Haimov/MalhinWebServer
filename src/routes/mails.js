
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sendMail = require(path.join(__dirname, '../services/mailsService'));

const router = express.Router();
router.use(bodyParser.json());


router.get("/", (req, res) => {
    let mailOptions = req.body; // need send and recive json with mailOptions format
    sendMail(mailOptions);
    res.json(mailOptions);
});


router.get("/:to/:subject/:html", (req, res) => {
    let mailOptions = {
        from: userMail,
        to: `${req.params.to}`,
        subject: `${req.params.subject}`,
        html: `${req.params.html}`
    };

    sendMail(mailOptions);
    res.json(mailOptions);
});

module.exports = router;