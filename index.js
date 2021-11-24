const dotenv = require('dotenv');
dotenv.config();
const express = require('express'); // Express Web Server
const port = process.env.PORT

const app = express(); // Initialize the express web server
const filesUploadRouter = require('./src/routes/filesUpload');
const uuidRouter = require('./src/routes/uuid');
const staticRouter = require('./src/routes/static');
const mailRouter = require('./src/routes/mails');

app.use('/upload', filesUploadRouter);
app.use('/cookies', uuidRouter);
app.use('/static', staticRouter);
app.use('/sendMail', mailRouter);
app.set('view engine', 'ejs');

/**
 * Serve the basic index.html with upload form
 */
app.get("/", (req, res) => {
    //res.sendFile(__dirname + '/src/static/index.html');
    res.render('index');
});

const server = app.listen(port, function () {
    console.log(`Listening on port ${server.address().port}`);
});