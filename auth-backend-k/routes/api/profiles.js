const express = require('express');
const router = express.Router();

const user_profile = require('../../models/Profile');



router.get('/', (req, res) => {
    user_profile.find({})
        .then(users_info => res.json(users_info));
});

router.post('/', (req, res) => { 
    const newProfile = new user_profile({
        name: req.body.name,
        matches: req.body.matches
    });
    newProfile.save().then(user_info => res.json(user_info));
})

// router.delete('/:id', async (req, res) => {
//     Msg.findById(req.params.id)
//         .then(message => message.remove().then(() => res.json({ success: true })))
//         .catch(err => res.status(404).json({ success: false }));
// });
module.exports = router;