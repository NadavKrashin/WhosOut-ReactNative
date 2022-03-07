const Group = require("../models/Group");
const User = require("../models/User");

const addGroup = async (users) => {
    return await Group.create(users)
}

const addUserToGroup = async (userId, groupId) => {
    const group = await Group.findById(groupId)
    group.users.push(userId);

    return await group.save()
}

module.exports = {
    addGroup,
    addUserToGroup,
}