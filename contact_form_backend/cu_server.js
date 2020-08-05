const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('../../src/components/ContactUs', () => { 
    resizeBy.send('Welcom to my form')
})

app.post('/api/form', (req, res) => { 
    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: process.env.EMAIL_USERNAME || 'ma9558454@gmail.com',
            pass: process.env.EMAIL_PASSWORD || 'Abcde12345*'
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { 
    console.log(`server starting at port ${PORT}`);
})