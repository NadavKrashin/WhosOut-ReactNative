const { addPost,
    addLikeToPost, removeLikeFromPost, getAllPosts } = require("../repositories/posts");


const findAllPosts = async () => {
    return await getAllPosts();
}

const createPost = async (post) => {
    return await addPost(post)
}

const likePost = async (postId, userId) => {
    await addLikeToPost(postId, userId)
}

const unlikePost = async (postId, userId) => {
    await removeLikeFromPost(postId, userId)
}


module.exports = { createPost, likePost, unlikePost, findAllPosts }
