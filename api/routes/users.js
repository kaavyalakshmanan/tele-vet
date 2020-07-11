const express = require('express');
const router = express.Router();
const {uuid} = require("uuidv4");
const user = require("../models/userModel");


router.get('/', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    user.find({}, function (err, result) {
        if (err) {
            next(err);
        } else {
            res.json(result)
        }
    });
});

router.post('/', (req, res, next) => {
    let newUser = new user(req.body);
    newUser.id = uuid();
    res.setHeader('Content-Type', 'application/json');
    newUser.save().then((newUser) => {
        res.send(newUser);
    }).catch(err => {
        console.log(err);
        next(err);
    });
});

router.get('/id/:id', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    user.findById(req.params.id, (err, user) => {
        if (err) {
            next(err);
        } else if (!user) {
            res.status(404).send(`User with id ${req.params.id} not found`);
        } else {
            res.status(200).json(user._doc);
        }
    });
});

router.put('/id/:id', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    user.findByIdAndUpdate(req.params.id, req.body, (err, newUser) => {
        if (err) {
            next(err);
        } else {
            res.send(req.body);
        }
    });
});

// We May want to remove this endpoint or make it restricted
router.delete('/id/:id', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    user.findByIdAndDelete(req.params.id, (err, deletedUser) => {
        if (err) {
            next(err);
        } else {
            res.json(deletedUser);
        }
    });
});

module.exports = router;