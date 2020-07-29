const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

// AUTHENTICATED EXISTING USER

// User Model
const User = require("../models/userModel");

/* @route  POST /auth
   @desc   Authenticate eixsting user
   @access Public */
   
router.post('/', (req, res) => {
    const {username, password} = req.body;

    // Simple validation
    if (!username || !password) {
        return res.status(400).json({msg: 'Please enter all fields'});
    }

    // Check for existing user
    User.findOne({username})
        .then(user => {
            if (!user) return res.status(400).json({msg: 'User does not exist'});

            // Compare plain-text password sent with body request to hash password in db

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
                                    username: user.username,
                                    email: user.email
                                }
                            })
                        }
                    )
                })
        })
}); 

// JWT Authentication is stateless, need to constantly validate user that's logged in on frontend

/* @route  GET /auth/user
   @desc   Get user data --> Validate user with token
   @access Private */

    router.get('/user', auth, (req, res) => {
        User.findById(req.user.id)
            // Password does not get returned
            .select('-password')
            .then(user => res.json(user));
    });




module.exports = router;