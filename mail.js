'use strict';
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service:"qq",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: '1437715223@qq.com', // generated ethereal user
        pass: 'euhdogyncnouhbic' // generated ethereal password
    }
});
let mail={
    transporter:transporter,
    send(mail,content){
        let mailOptions = {
            from: '"Fred Foo 👻" <1437715223@qq.com>', // sender address
            to: mail, // list of receivers
            subject: 'Hello ✔', // Subject line
            text: content, // plain text body
            html: content // html body
        };
        this.transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    }
}

module.exports=mail;