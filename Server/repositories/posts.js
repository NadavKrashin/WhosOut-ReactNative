const Post = require("../models/Post");

const getAllPosts = async () => {
    return await Post.find({}).populate("author");
}

const addPost = async (post) => {
    return await Post.create(post)
}

const addLikeToPost = async (postId, userId) => {
    const post = await Post.findById(postId)
    post.likes.push(userId);

    await post.save()
}

const removeLikeFromPost = async (postId, userId) => {
    const post = await Post.findById(postId)
    post.likes.splice(post.likes.indexOf(userId), 1);

    await post.save()
}

module.exports = {
    addPost,
    addLikeToPost,
    removeLikeFromPost,
    getAllPosts,
}