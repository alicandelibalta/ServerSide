const jwt = require('jsonwebtoken');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env.development') });


function generateToken(payload, secret = process.env.JWT_SECRET, options = { expiresIn: '1h' }) {
    return jwt.sign(payload, secret, options);
}


function verifyToken(token, secret = process.env.JWT_SECRET) {
    return jwt.verify(token, secret);
}

module.exports = {
    generateToken,
    verifyToken
};
