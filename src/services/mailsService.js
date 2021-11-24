// mailOptions = 
// {
//     from: 'userMail',
//     to: 'toMail',
//     subject: 'sub',
//     text: 'text',
//     html: 'html',
//     // the attachments not must to be strings
//     attachments: 'attachments'
// }

const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const userMail = 'malhinlearning@gmail.com';
const userPass = 'ojdpheyvbtssrzjt'; // need a token you can make it here: https://myaccount.google.com/apppasswords
const maileService = 'gmail';
const transporter = nodemailer.createTransport({
    service: maileService,
    auth: {
        user: userMail,
        pass: userPass
    }
});


function SendMail(mailOptions) {
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = SendMail;