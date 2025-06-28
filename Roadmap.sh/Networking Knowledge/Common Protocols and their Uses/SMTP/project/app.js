const express = require('express');
const app = express();
const port = 3000;

// the set variables below are for sending emails
const nodemailer = require('nodemailer');
const from = 'programeseufuturoti@gmail.com';
const password = 'qnuptusceovbnryo';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: from,
        pass: password
    }
});

async function sendEmail(content) {
    let emailContent = {
        from: from,
        to: content.to,
        subject: content.subject,
        text: content.text
    }

    try {
        await transporter.sendMail(emailContent);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};

app.use(express.json());

app.post('/send', async (req, res) => {

    let content = {
        subject: req.body.subject,
        to: req.body.to,
        text: req.body.text
    }

    let response = await sendEmail(content);

    if (response == true) {
        res.json({ message: 'Email is sending...' });
    } else {
        res.status(500).json({ message: 'Failed to send email' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
