const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/WhosOut')
    .then(() => {
        console.log('connected to db');
    })
    .catch((e) => {
        console.log("Something went wrong connection to db", e);
    })