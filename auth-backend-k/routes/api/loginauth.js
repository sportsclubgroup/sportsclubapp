const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

//User Model 
const User = require('../../models/User');
const e = require('express');

// @route POST api/loginAuth
// @desc LoginAuth user
// @access Public
router.post('/', (req, res) => {
    const { email, password } = req.body;

    //Simple validation

    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    // Check for existing user

    User.findOne({ email })
        .then(user => {
            if (!user) return res.status(400).json({ msg: 'User does not exist' })

            //Validate password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });
                    jwt.sign(
                        { id: user.id },
                        config.get('jwtSecret'),
                        { expiresIn: 3600 },
                        (err, token) => {
                            if (err) throw err;
                            res.json({
                                token: token,
                                user: {
                                    // id: user.id,
                                    name: user.name,
                                    email: user.email,
                                }
                            });
                        }
                    )
                })


        })


});

// @route GET api/loginauth/user
// @desc  GET user data
// @access Private
// Get current user's data using token
router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user));
});

module.exports = router;