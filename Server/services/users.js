const { findUserByCredentials, findUserById, getUserGroup, updateUserStatusById, updateUserPhraseById, updateUserPasswordById } = require("../repositories/users");


const loginUser = async (username, password) => {
    return await findUserByCredentials(username, password);
}

const getUserById = async (id) => {
    return await findUserById(id);
}

const findUserGroup = async (userId) => {
    return await getUserGroup(userId)
}

const changeUserStatusById = async (userId, status) => {
    await updateUserStatusById(userId, status);
}

const changeUserPhraseById = async (userId, phrase) => {
    await updateUserPhraseById(userId, phrase);
}

const changeUserPasswordById = async (userId, password) => {
    await updateUserPasswordById(userId, password);
}

module.exports = { loginUser, getUserById, findUserGroup, changeUserStatusById, changeUserPhraseById, changeUserPasswordById }
