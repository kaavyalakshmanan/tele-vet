const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

// LOGGING IN AN EXISTING USER

// User Model
const User = require("../models/userModel");

// @route   POST /auth
// @desc    Authenticate login of user
// @access  Public
router.post('/', (req, res) => {
    const {username, password} = req.body;

    // Simple validation
    if (!username || !password) {
        // Bad request, user did not send correct info
        return res.status(400).json({msg: 'Please enter all fields'});
    }

    // Check for existing user
    User.findOne({username: username})
        .then(user => {
            if (!user) return res.status(400).json({msg: 'User does not exist'});

            // Validate password
            bcrypt.compare(password, user._doc.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json({msg: 'Invalid credentials'});

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
                })
                .catch(error => {
                    console.error(error);
                    next(error);
                });
        });
});

// @route   PUT /auth/user
// @desc    Put request to update an existing user
// @access  Private

// @route   PUT /auth/user
// @desc    Put request to update an existing user
// @access  Private

// @route   PUT /auth/user
// @desc    Put request to update an existing user
// @access  Private

router.put('/user', auth, (req, res, next) => {
    const newUser = req.body;
    User.findByIdAndUpdate(req.user.id, newUser, (err) => {
        if (err) {
            next(err);
        } else {
            User.findById(newUser._id, (err, updatedUser) => {
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(updatedUser._doc.password, salt, (err, hash) => {
                        if (err) throw err;
                        updatedUser._doc.password = hash;
                        updatedUser.save()
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
                            })
                            .catch(err => {
                                console.error(err);
                            });
                    });
                });
                res.status(200).send('User Updated Successfully');
            });
        }
    });
});

// @route   GET /auth/user
// @desc    Get user data
// @access  Private
// Validate user with token
router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .then(user => res.json(user));
});

module.exports = router;