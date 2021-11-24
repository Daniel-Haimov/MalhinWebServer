const express = require('express');
const path = require('path');
const staticPath = path.join(__dirname, '../../static');

const router = express.Router();

router.get("/:dir/:scriptName", (req, res) => {
    res.sendFile(staticPath + `/${req.params.dir}/${req.params.scriptName}`);
});

module.exports = router;