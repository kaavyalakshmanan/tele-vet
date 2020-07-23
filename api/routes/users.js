const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
 
// TODO: FIGURE OUT HOW VET STUFF IS GOING TO WORK NOW
// ADD AUTH?
// x-auth-token

// const {uuid} = require("uuidv4");
// const user = require("../models/userModel");

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

// router.get('/', (req, res, next) => {
//     res.setHeader('Content-Type', 'application/json');
//     user.find({}, function (err, result) {
//         if (err) {
//             next(err);
//         } else {
//             res.json(result)
//         }
//     });
// });

// router.post('/', (req, res, next) => {
//     let newUser = new user(req.body);
//     newUser.id = uuid();
//     res.setHeader('Content-Type', 'application/json');
//     newUser.save().then((newUser) => {
//         res.send(newUser);
//     }).catch(err => {
//         console.log(err);
//         next(err);
//     });
// });

// router.get('/id/:id', (req, res, next) => {
//     res.setHeader('Content-Type', 'application/json');
//     user.findById(req.params.id, (err, user) => {
//         if (err) {
//             next(err);
//         } else if (!user) {
//             res.status(404).send(`User with id ${req.params.id} not found`);
//         } else {
//             res.status(200).json(user._doc);
//         }
//     });
// });

// // FIXME: Do we still need this route?
// router.get('/id/:userId/document/:documentId', (req, res, next) => {
//     res.setHeader('Content-Type', 'application/json');
//     user.findById(req.params.userId, (err, user) => {
//         if (err) {
//             next(err);
//         } else if (!user) {
//             res.status(404).send(`User with id ${req.params.userId} not found`);
//         } else {
//             let targetDocument = null;
//             user._doc.documents.list.forEach((doc => {
//                 if (req.params.documentId === doc.id.toString()) {
//                     targetDocument = JSON.stringify(doc);
//                 }
//             }));
//             if (targetDocument) {
//                 res.status(200).json(targetDocument);
//             } else {
//                 res.status(404).send(`Document with id ${req.params.documentId} not found`);
//             }
//         }
//     });
// })

// router.put('/id/:id', (req, res, next) => {
//     res.setHeader('Content-Type', 'application/json');
//     user.findByIdAndUpdate(req.params.id, req.body, (err, newUser) => {
//         if (err) {
//             next(err);
//         } else {
//             res.send(req.body);
//         }
//     });
// });

// // We May want to remove this endpoint or make it restricted
// router.delete('/id/:id', (req, res, next) => {
//     res.setHeader('Content-Type', 'application/json');
//     user.findByIdAndDelete(req.params.id, (err, deletedUser) => {
//         if (err) {
//             next(err);
//         } else {
//             res.json(deletedUser);
//         }
//     });
// });

module.exports = router;