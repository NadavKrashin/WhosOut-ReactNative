const { findUserByCredentials } = require("../repositories/users");


const loginUser = async (username, password) => {
    return await findUserByCredentials(username, password);
}

module.exports = { loginUser }
