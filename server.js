const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/api/users/vets', (req, res) => {
    res.send({ vets: 'THIS IS A MOCK REST SERVICE. NO VET USERS AVAILABLE' });
});

app.get('/api/users/owners', (req, res) => {
    res.send({owners: 'THIS IS A MOCK REST SERVICE. NO PET OWNERS AVAILABLE'})
});