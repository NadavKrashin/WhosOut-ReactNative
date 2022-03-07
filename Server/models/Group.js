const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
    users: {
        type: [{type:mongoose.Schema.Types.ObjectId, ref:"User"}],
        required: true
    },
})

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;