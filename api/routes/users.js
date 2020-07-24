const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

// REGISTERING A NEW USER

// User Model
const User = require("../models/userModel");

// @route   POST /users
// @desc    Register a new user
// @access  Public
router.post('/', (req, res) => {
    const {name, email, username, password} = req.body;

    // Simple validation
    if (!name || !username || !email || !password) {
        // Bad request, user did not send correct info
        return res.status(400).json({msg: 'Please enter all fields'});
    }

    // Check for existing user
    User.findOne({username})
        .then(user => {
            if (user) return res.status(400).json({msg: 'User already exists'});

            const newUser = new User({
                name,
                email,
                username,
                password
            });

            // Create salt and hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {

                            jwt.sign(
                                {id: user.id},
                                config.get('jwtSecret'),
                                {expiresIn: 3600},
                                (err, token) => {
                                    if (err) throw err;
                                    res.json({
                                        token,
                                        user: {
                                            id: user.id,
                                            name: user.name,
                                            email: user.email,
                                            username: user.username
                                        }
                                    });
                                });
                        });
                });
            });
        });
});


module.exports = router;