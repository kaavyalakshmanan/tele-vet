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

// FIXME: Do we still need this route?
router.get('/id/:userId/document/:documentId', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    user.findById(req.params.userId, (err, user) => {
        if (err) {
            next(err);
        } else if (!user) {
            res.status(404).send(`User with id ${req.params.userId} not found`);
        } else {
            let targetDocument = null;
            user._doc.documents.list.forEach((doc => {
                if (req.params.documentId === doc.id.toString()) {
                    targetDocument = JSON.stringify(doc);
                }
            }));
            if (targetDocument) {
                res.status(200).json(targetDocument);
            } else {
                res.status(404).send(`Document with id ${req.params.documentId} not found`);
            }
        }
    });
})

router.put('/id/:id', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    user.findByIdAndUpdate(req.params.id, req.body, (err, newUser) => {
        if (err) {
            next(err);
        } else {
            res.status(200).send(JSON.stringify(newUser));
        }
    });
});

router.post('/image/:id', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    user.findByIdAndUpdate(
        req.params.id,
        {$push: {images: req.body}},
        (err, response) => {
            if (err) {
                next(err);
            } else {
                console.log(response._doc);
                res.send(response._doc);
            }
        }
    )

})

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