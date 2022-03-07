const User = require("../models/User");

const findUserByCredentials = async (username, password) => {
    return await User.findOne({ username, password });
}

module.exports = {
    findUserByCredentials
}