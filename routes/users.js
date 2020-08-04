const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

// REGISTERING A NEW USER

// User Model
const User = require("../models/userModel");
const { eventNames } = require('../app');

/* @route  POST /users
   @desc   Register new user
   @access Public */

router.post('/', (req, res) => {
    const {name, email, username, password, isAuthenticated, isFetching, didInvalidate, profilePicture, lastUpdate, images, appointments, messages, documents} = req.body;

    // Simple validation
    if (!name || !username || !email || !password) {
        return res.status(400).json({msg: 'Please enter all fields'});
    }

    // Check for existing user
    User.findOne({username})
        .then(user => {
            if (user) return res.status(400).json({msg: 'User already exists'})

            // const newUser = new User({
            //     name,
            //     username,
            //     email,
            //     password
            // });

            // const newUser =({
            //     // isAuthenticated: false,
            //     // isFetching: true,
            //     // didInvalidate: false,
            //     name: name,
            //     username: username,
            //     email: email,
            //     password: password,
            //     // profilePicture: "",
            //     // lastUpdate: Date.now(),
            //     // images: [],
            //     // appointments: [],
            //     // messages: [],
            //     // documents: []
            // })

            const newUser = new User({
                isAuthenticated,
                isFetching,
                didInvalidate,
                name,
                email,
                username,
                password,
                profilePicture,
                lastUpdate,
                images,
                appointments,
                messages,
                documents
            });

            // Create salt & hash
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
                                            username: user.username,
                                            email: user.email
                                        }
                                    })
                                }
                            )
                        })
                })
            })
        })
}); 



module.exports = router;