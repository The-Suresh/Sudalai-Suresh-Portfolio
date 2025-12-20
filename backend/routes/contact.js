const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

const nodemailer = require('nodemailer');

// POST: Save a new message and send email
router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Save to DB
        const newMessage = new Message({ name, email, message });
        await newMessage.save();

        // Send Email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER, // Send to site owner
            subject: `New Portfolio Message from ${name}`,
            text: `
                Name: ${name}
                Email: ${email}
                Message: ${message}
            `
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Error sending email:", error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        res.status(201).json(newMessage);
    } catch (error) {
        console.error("Error processing message:", error);
        res.status(500).json({ error: 'Server Error' });
    }
});

// GET: Fetch all messages
router.get('/', async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.json(messages);
    } catch (error) {
        console.error("Error fetching messages:", error);
        res.status(500).json({ error: 'Server Error' });
    }
});

module.exports = router;
