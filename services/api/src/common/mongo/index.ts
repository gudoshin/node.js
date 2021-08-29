const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const MONGO_AUTH_DB = process.env?.MONGO_AUTH_DB;
const MONGO_USER = process.env?.MONGO_USER;
const MONGO_PASSWORD = process.env?.MONGO_PASSWORD;
const MONGO_URI = process.env?.MONGO_URI;

if (!MONGO_AUTH_DB || !MONGO_PASSWORD || !MONGO_USER || !MONGO_URI) throw new Error('MONGO_AUTH_DB / MONGO_USER / MONGO_PASSWORD / MONGO_URI is required')

console.log('Connecting to ', MONGO_URI);

// mongoose.connect(MONGO_URI, {
//     user: MONGO_USER,
//     pass: MONGO_PASSWORD,
//     authSource: MONGO_AUTH_DB,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     promiseLibrary: mongoose.Promise
// })

mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@mongo/${MONGO_AUTH_DB}`);

module.exports = mongoose;

