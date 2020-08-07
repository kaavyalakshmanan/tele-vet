const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// This function sends an email to the Tele-Vet Team
// We are using Mailtrap, a fake smtp mail service to recieve emails
// This is to avoid creating security alerts by spamming real email addresses
function sendMail(content, target="thetelevet@gmail.com") {
    const transport = nodemailer.createTransport({
        host: "smtp.gmail.io",
        port: 2525,
        // auth: {
        //     user: process.env.EMAIL_ADDRESS,
        //     pass: process.env.EMAIL_PASSWORD
        // }
        auth: {
            user: "thetelevet@gmail.com",
            pass: "securevoldy436"
        }
    });
    const mailOptions = {
        from: "mail@televet.com",
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