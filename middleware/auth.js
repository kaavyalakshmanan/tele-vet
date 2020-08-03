const config = require('config');
const jwt = require('jsonwebtoken');

// Create middleware so we can have private routes that are only accessed if we send along auth token
// Whenever we want private route, can add this piece of middleware as second param in endpoint 

function auth(req, res, next) {
    // Fetch token from header, which is in req
    const token = req.header('x-auth-token')

    // Check for token
    if (!token) {
        // User is not authorized
        return res.status(401).json({msg: 'No token, authorization denied'})
    }

    try {
    // Verify token
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    // Add user from payload
    req.user = decoded;
    // Call next piece of middleware
    next();
    } catch(e) {
        // Bad response
        res.status(400).json({msg: 'Token is not valid'})
    }


   

}

module.exports = auth;