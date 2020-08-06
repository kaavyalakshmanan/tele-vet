/* REGISTERING A NEW USER
   Credits to help us understand how to use JWT and bcryptjs: https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669
*/

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

// User Model
const User = require('../models/userModel');

/* @route   POST /users
   @desc    Register a new UserDasboard
   @access  Public */

router.post('/', (req, res) => {
    const {email, username, password} = req.body;

    // If UserDasboard does not input username, email, or password, send 400 response
    if (!username || !email || !password) {
        return res.status(400).json({msg: 'Please enter all fields'});
    }

    // If UserDasboard is already registered, send 400 response
    User.findOne({username})
        .then(user => {
            if (user) return res.status(400).json({msg: 'User already exists'});

            // Create new UserDasboard object with req.body that's passed in from axios post request
            const newUser = new User(req.body);

            // Salt & hash password to make more secure
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    // Set UserDasboard's password to hashed password
                    newUser.password = hash;
                    // Dave UserDasboard to database
                    newUser.save()
                        .then(user => {
                            // Sign UserDasboard in using JWT token
                            jwt.sign(
                                {id: user.id},
                                config.get('jwtSecret'),
                                // Keep UserDasboard logged in for 1 hour
                                {expiresIn: 3600},
                                (err, token) => {
                                    if (err) throw err;
                                    // Send JSON response with relevant UserDasboard info and newly created authorization token
                                    res.json({
                                        token,
                                        user: {
                                            id: user.id,
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