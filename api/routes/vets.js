const express = require('express');
const router = express.Router();
const {uuid} = require("uuidv4");
const veterenarians = require("../models/vetModel");

//Get all veterenarianss in the dataset
// FIXME: This probably should not be a public endpoint because it returns passwords
router.get('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    veterenarians.find({}, function (err, myData) {
        if (err) {
            next(err);
        } else {
            res.send(myData)
        }
    })
})

router.get('/profiles/all', function (req, res, next) {
    veterenarians.find({}, function(err, vets) {
        if (err) {
            next(err);
        } else {
            res.send(vets);
        }
    });
})

// Get veterenarians profile when given the mongodb _id
router.get('/id/:id', function (req, res, next) {
    veterenarians.findById(req.params.id, function (err, foundVet) {
        res.setHeader('Content-Type', 'application/json');
        if (err) {
            next(err);
        } else if (!foundVet) {
            res.status(404).send(`Vet with _id ${req.params.id} was not found`);
        } else {
            res.json(foundVet)
        }
    })
})

// Get veterenarians by matching username for login NOTE: EVERY API CALLS ARE CASE SENSITIVE
router.get('/username/:username', function (req, res, next) {
    veterenarians.find({username: req.params.username}, function (err, foundVet) {
        res.setHeader('Content-Type', 'application/json');
        if (err) {
            next(err);
        } else if (!foundVet) {
            res.status(404).send(`Vet with username ${req.params.username} was not found`);
        } else {
            res.json(foundVet)
        }
    })
});

// Get veterenarians by matching email for lost password
router.get('/email/:email', function (req, res, next) {
    veterenarians.find({email: req.params.email}, function (err, foundVet) {
        res.setHeader('Content-Type', 'application/json');
        if (err) {
            next(err);
        } else if (!foundVet) {
            res.status(404).send(`Vet with email ${req.params.email} was not found`);

        } else {
            res.json(foundVet)
        }
    })
});

// Add new veterenarians profile as per given in the body
router.post('/', function (req, res, next) {
    let newVet = new veterenarians(req.body);
    newVet.id = uuid();
    res.setHeader('Content-Type', 'application/json');
    newVet.save().then((newVet) => {
        res.status(200).json({"The new veterenarians has been added successfully :-D": newVet})
    }).catch(err => {
        console.error(err);
        next(err);
    })
})

// Update veterenarians profile when given the mongodb _id - using findOneAndUpdate -> needs to be tested
router.put('/:id', function (req, res, next) {
    veterenarians.findOneAndUpdate(req.params.id, req.body, function(err, result) {
        res.setHeader('Content-Type', 'application/json');
        if (err) {
            next(err);
        } else {
            res.send(result);
        }
    });
});

// Delete veterenarians profile when given the mongodb _id
router.delete('/:id', function (req, res, next) {
    veterenarians.findById(req.params.id, function (err, foundVet) {
        res.setHeader('Content-Type', 'application/json');
        if (!foundVet) {
            res.status(404).send(`Vet with _id ${req.params.id} was not found`);
        } else {
            foundVet.delete()
                .then(foundVet => {
                    res.json(`${foundVet} has been deleted`)
                })
                .catch(err => {
                    next(err);
                });
        }
    })
})

module.exports = router;


// UPDATE WITHOUT USING findOneAndUpdate - veterenarians profile when given the mongodb _id
// router.post('/:id', function (req, res, next) {
//     veterenarians.findById(req.params.id, function (err, foundVet) {
//             res.setHeader('Content-Type', 'application/json');
//             if (!foundVet) {
//                 res.status(404).send("id number was not found")
//             } else {
//                 foundVet.name = req.body.name;
//                 foundVet.save().then(foundVet => {
//                     res.json("The found veterenarians has been updated ;-D")
//                 })
//                     .catch(err => {
//                         res.status(400).send("The update has failed ;-(")
//                     })
//             }
//         }
//     )
// })