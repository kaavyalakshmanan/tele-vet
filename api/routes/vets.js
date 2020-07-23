const express = require('express');
const router = express.Router();
const {uuid} = require("uuidv4");
const veterinarian = require("../models/vetModel");

//Get all veterinarians in the dataset
// FIXME: This probably should not be a public endpoint because it returns passwords
router.get('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    veterinarian.find({}, function (err, myData) {
        if (err) {
            next(err);
        } else {
            res.send(myData)
        }
    })
})

router.get('/profiles/all', function (req, res, next) {
    veterinarian.find({}, function(err, vets) {
        if (err) {
            next(err);
        } else {
            let vetList = [];
            vets.forEach(vet => {
                console.log(vet.profilePicture)
                vetList.push({
                    _id: vet._id,
                    name: vet.firstName + ' ' + vet.lastName,
                    description: vet.description,
                    rating: vet.rating,
                    mapURL: 'google.com/maps/place/' + vet.businessAddress.replace(' ', '+') + '+' + vet.city + '+' + vet.postalCode,
                    facebook: vet.facebook,
                    instagram: vet.instagram,
                    profilePicture: vet.profilePicture
                });
            });
            res.send(vetList);
        }
    });
})

// Get veterinarian profile when given the mongodb _id
router.get('/id/:id', function (req, res, next) {
    veterinarian.findById(req.params.id, function (err, foundVet) {
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

// Get veterinarian by matching username for login NOTE: EVERY API CALLS ARE CASE SENSITIVE
router.get('/username/:username', function (req, res, next) {
    veterinarian.find({username: req.params.username}, function (err, foundVet) {
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

// Get veterinarian by matching email for lost password
router.get('/email/:email', function (req, res, next) {
    veterinarian.find({email: req.params.email}, function (err, foundVet) {
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

// Add new veterinarian profile as per given in the body
router.post('/', function (req, res, next) {
    let newVet = new veterinarian(req.body);
    newVet.id = uuid();
    res.setHeader('Content-Type', 'application/json');
    newVet.save().then((newVet) => {
        res.status(200).json({"The new veterinarian has been added successfully :-D": newVet})
    }).catch(err => {
        console.error(err);
        next(err);
    })
})

// Update veterinarian profile when given the mongodb _id - using findOneAndUpdate -> needs to be tested
router.put('/:id', function (req, res, next) {
    veterinarian.findOneAndUpdate(req.params.id, req.body, function(err, result) {
        res.setHeader('Content-Type', 'application/json');
        if (err) {
            next(err);
        } else {
            res.send(result);
        }
    });
});

// Delete veterinarian profile when given the mongodb _id
router.delete('/:id', function (req, res, next) {
    veterinarian.findById(req.params.id, function (err, foundVet) {
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


// UPDATE WITHOUT USING findOneAndUpdate - veterinarian profile when given the mongodb _id
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