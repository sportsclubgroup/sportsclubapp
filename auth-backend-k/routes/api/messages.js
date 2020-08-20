const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const User = require('../../models/User');
const Msg = require('../../models/Msg');


router.get('/display', auth, async (req, res) => {
    try {
        const messages = await Msg.find({ user: req.user.id }).sort({ date: -1 });
        res.json(messages);
    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/feedback', auth, async (req, res) => { 
    const { subject, description } = req.body;
    try { 
        const newMessage = new Msg({
            subject,
            description,
            user: req.user.id
        });

        const message = await newMessage.save();
        res.json(message)
    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.delete('/:id', async (req, res) => {
    Msg.findById(req.params.id)
        .then(message => message.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});
module.exports = router;