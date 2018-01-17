'use strict'

var nodemailer = require('nodemailer');
var config = require('./config');

var transporter = nodemailer.createTransport({
    service: config.fromEmail.service,
    auth: {
        user: config.fromEmail.user, //发送者邮箱
        pass: config.fromEmail.pass //邮箱第三方登录授权码
    },
    debug: true
}, {
    from: config.fromEmail.user, //发送者邮箱
    headers: {
        'X-Laziness-level': 1000
    }
});

console.log('SMTP Configured');


console.log('Send Mail');

var sendMail = (msgInfo) => transporter.sendMail(msgInfo, (error, info) => {
    if (error) {
        console.log('Error occurred');
        console.log(error.message);
        return;
    }
    console.log('Message sent successfully!');
    console.log('Server responded with "%s"', info.response);
    transporter.close();
});


module.exports = sendMail;