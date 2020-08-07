/* REGISTERING A NEW USER
   Credits to help us understand how to use JWT and bcryptjs: https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669
*/
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// User Model
const User = require('../models/userModel');

const JWT_SECRET = process.env.JWT_SECRET;

/* @route   POST /users
   @desc    Register a new user
   @access  Public */

router.post('/', (req, res) => {
    const {email, username, password} = req.body;

    // If user does not input username, email, or password, send 400 response
    if (!username || !email || !password) {
        return res.status(400).json({msg: 'Please enter all fields'});
    }

    // If user is already registered, send 400 response
    User.findOne({username: username, email: email})
        .then(user => {
            if (user) return res.status(400).json({msg: 'User already exists'});

            // Create new user object with req.body that's passed in from axios post request
            const newUser = new User(req.body);

            // Salt & hash password to make more secure
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    // Set user's password to hashed password
                    newUser.password = hash;
                    // Dave user to database
                    newUser.save()
                        .then(user => {
                            // Sign user in using JWT token
                            jwt.sign(
                                {id: user.id},
                                JWT_SECRET,
                                // Keep user logged in for 1 hour
                                {expiresIn: 3600},
                                (err, token) => {
                                    if (err) throw err;
                                    // Send JSON response with relevant user info and newly created authorization token
                                    res.json({
                                        token,
                                        user: {
                                            id: user.id,
                                            email: user.email,
                                            username: user.username
                                        }
                                    });
                                });
                        })
                .catch(err => {
                        return res.status(400).json({msg: 'User already exists'});
                    })
                });
            });
        })
        .catch(err => {
            return res.status(400).json({msg: 'Unable to create this user.'});
        })
});


module.exports = router;