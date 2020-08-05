const express = require('express');
const router = express.Router();

const Msg = require('../../models/Msg');


router.get('/', (req, res) => {
    Msg.find()
        .then(messages => res.json(messages));
});

router.post('/', (req, res) => { 
    const newMsg = new Msg({
        message: req.body.message
    });
    newMsg.save().then(message => res.json(message));
})

router.delete('/:id', async (req, res) => {
    Msg.findById(req.params.id)
        .then(message => message.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});
module.exports = router;