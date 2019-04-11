const mongoose = require('mongoose');
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/personal-api',
    { useMongoClient: true, useFindAndModify: false }
);

// module.exports.Campsite = require("./campsite.js.example");
