//for jwt_token secret key
const crypto = require('crypto');
const secret = crypto.randomBytes(64).toString('hex');
console.log(secret)