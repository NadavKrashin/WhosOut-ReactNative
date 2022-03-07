const mongoose = require('mongoose');

const DBUrl = process.env.NODE_ENV === "production" ? process.env.DB_URL : "mongodb://localhost:27017/WhosOut"
mongoose.connect(DBUrl)
    .then(() => {
        console.log('connected to db');
    })
    .catch((e) => {
        console.log("Something went wrong connection to db", e);
    })