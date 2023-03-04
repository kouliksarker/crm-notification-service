const nodemailer = require("nodemailer")
require('dotenv').config();
module.exports = nodemailer.createTransport({
    service: "gmail",
    debug: true,
    auth: {
        user: process.env.email,
        pass: process.env.password
    }
})