var express = require('express');
var router = express.Router();
const {uuid} = require("uuidv4");
let veterinarian = require("../models/model");

//Get all veterinarians in the dataset
router.get('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    veterinarian.find(function (err, myData) {
        if (err) {
            console.log(err);
        } else {
            res.json(myData)
        }
    })
})

// Get veterinarian by matching username for login
router.get('/username', function (req, res, next) {
    veterinarian.find({username: req.params.username}, function (err, foundVet) {
        res.setHeader('Content-Type', 'application/json');
        if (!foundVet) {
            res.status(404).send("This email was never signed up as a user")
        } else {
            res.json(foundVet)
        }
    })
});

// Get veterinarian by matching email for lost password
router.get('/:email', function (req, res, next) {
    veterinarian.find({email: req.params.email}, function (err, foundVet) {
        res.setHeader('Content-Type', 'application/json');
        if (!foundVet) {
            res.status(404).send("This email was never signed up as a user")
        } else {
            res.json(foundVet)
        }
    })
});

// Add new veterinarian profile as per given in the body
router.post('/', function (req, res, next) {
    let newVet = new veterinarian(req.body);
    newVet.id = uuid();
    res.setHeader('Content-Type', 'application/json');
    newVet.save().then((newVet) => {
        res.status(200).json({"The new veterinarian has been added successfully :-D": newVet})
    }).catch(err => {
        res.status(400).send("The addition has failed ;-(");
    })
})

// Update veterinarian profile when given the mongodb _id - using findOneAndUpdate -> needs to be tested
router.post('/:id', function (req, res, next) {
    veterinarian.findOneAndUpdate(req.params.id, req.body, function(err, result) {
        res.setHeader('Content-Type', 'application/json');
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

// // Update veterinarian profile when given the mongodb _id
// router.post('/:id', function (req, res, next) {
//     veterinarian.findById(req.params.id, function (err, foundVet) {
//             res.setHeader('Content-Type', 'application/json');
//             if (!foundVet) {
//                 res.status(404).send("id number was not found")
//             } else {
//                 foundVet.name = req.body.name;
//                 foundVet.save().then(foundVet => {
//                     res.json("The found veterinarian has been updated ;-D")
//                 })
//                     .catch(err => {
//                         res.status(400).send("The update has failed ;-(")
//                     })
//             }
//         }
//     )
// })

// Delete veterinarian profile when given the mongodb _id
router.delete('/:id', function (req, res, next) {
    veterinarian.findById(req.params.id, function (err, foundVet) {
        res.setHeader('Content-Type', 'application/json');
        if (!foundVet) {
            res.status(404).send("id item was not found")
        } else {
            foundVet.delete()
                .then(foundVet => {
                    res.json("The found item has been deleted ;-o")
                })
                .catch(err => {
                    res.status(400).send("The update has failed ;-(")
                })
        }
    })
})

module.exports = router;