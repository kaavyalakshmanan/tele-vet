const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// This function sends an email to the Tele-Vet Team
// We are using Mailtrap, a fake smtp mail service to recieve emails
// This is to avoid creating security alerts by spamming real email addresses
function sendMail(content, target="thetelevet@gmail.com") {
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "b809824a26074b",
            pass: "c80af9d5c521b4"
        }
    });
    const mailOptions = {
        from: "43e90e571d-face75@inbox.mailtrap.io",
        to: target,
        subject: 'NEW VET REQUEST',
        text: content
    }
    transport.sendMail(mailOptions, function(error, info){
        if (error) {
            throw error;
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

router.post('/', (req, res) => {
    console.log('got the request');
    try {
        sendMail(req.body.content)
        return res.status(200).send('Email sent successfully');
    } catch (err) {
        return res.status(400).send('Email failed to send');
    }
});

module.exports = router;