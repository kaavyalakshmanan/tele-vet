const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/static/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', req.url));
});

router.get('/manifest.json', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', req.url));
});

router.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/favicon.io'));
});

router.get('/resources/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', req.url));
});

router.get('/*', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
