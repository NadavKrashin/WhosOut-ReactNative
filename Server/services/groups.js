const { addGroup,
    addUserToGroup } = require("../repositories/groups");


const createGroup = async (users) => {
    return await addGroup(users)
}

const createUserInGroup = async (userId, groupId) => {
    return await addUserToGroup(userId, groupId)
}

module.exports = { createGroup, createUserInGroup }
