const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

// const {uuid} = require("uuidv4");
// const user = require("../models/userModel");

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
    User.findOne({username})
        .then(user => {
            if (!user) return res.status(400).json({msg: 'User does not exist'});

            // Validate password
            bcrypt.compare(password, user.password)
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
        });
});

// @route   GET /auth/user
// @desc    Get user data
// @access  Private
// Validate user with token
router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user));
})


module.exports = router;