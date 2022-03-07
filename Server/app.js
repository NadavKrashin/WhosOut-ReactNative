if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const usersController = require('./controllers/users');
const eventsController = require('./controllers/events');
const groupsController = require('./controllers/groups');
const postsController = require('./controllers/posts');
require("./db/db");

const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersController);
app.use('/events', eventsController);
app.use('/groups', groupsController);
app.use('/posts', postsController);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(__dirname + '/public'))

    app.get(/.*/, (req, res) => {
        res.sendFile(__dirname + '/public/index.html')
    })
}
module.exports = app;
