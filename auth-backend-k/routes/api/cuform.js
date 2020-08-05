const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const auth=require('../../middleware/auth');
const app = express();

const Msg = require('../../models/Msg');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

router.get('../../../src/components/ContactUs', () => { 
    resizeBy.send('Welcom to my form')
})

router.post('', (req, res) => { 
    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    let mailOptions = {
        from: data.email,
        to: 'ma9558454@gmail.com',
        subject: `Message from ${data.name}`,
        html: `
        
            <h3>User's information</h3>
            <ul>
                <li> Name: ${data.name}</li>
                <li> Email: ${data.email}</li>
            </ul>

            <h3> Message </h3>
            <p>${data.message}</p>

        `
    };

    smtpTransport.sendMail(mailOptions, (error, response) => { 
        if (error) {
            res.send(error)
        }
        else { 
            res.send('Success')
        }
    })

    smtpTransport.close();
})

module.exports = router;
