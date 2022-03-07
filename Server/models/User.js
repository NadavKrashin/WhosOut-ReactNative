const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    group: {
        type: mongoose.Types.ObjectId,
        ref: 'Group',
    },
    phrase: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Available", "IDF", "Girl"],
        required: true,
        default: "Available"
    },
    profileUrl: {
        type: String,
        default: "https://res.cloudinary.com/nadavkrashin/image/upload/v1634061154/Who%27s%20Out/Profiles/default_avatar_llfkku.jpg"
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;