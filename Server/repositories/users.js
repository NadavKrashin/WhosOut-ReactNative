const User = require("../models/User");
const Group = require("../models/Group");

const findUserByCredentials = async (username, password) => {
    return await User.findOne({ username, password });
}

const findUserById = async (id) => {
    return await User.findById(id);
}

const getUserGroup = async (userId) => {
    const user = await User.findById(userId);

    return await Group.findById(user.group).populate("users");
}

const updateUserStatusById = async (id, status) => {
    const user = await User.findById(id);
    user.status = status;
    await user.save();
}

const updateUserPhraseById = async (id, phrase) => {
    const user = await User.findById(id);
    user.phrase = phrase;
    await user.save();
}

const updateUserPasswordById = async (id, password) => {
    const user = await User.findById(id);
    user.password = password;
    await user.save();
}

module.exports = {
    findUserByCredentials,
    findUserById,
    getUserGroup,
    updateUserStatusById,
    updateUserPhraseById,
    updateUserPasswordById
}