const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    url: {
        type: String,
        required: true
    },
    uploadDate: {
        type: Date,
    },
    caption: {
        type: String
    },
    likes: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
        default: []
    }
})

const Post = mongoose.model("Post", postSchema);

module.exports = Post;