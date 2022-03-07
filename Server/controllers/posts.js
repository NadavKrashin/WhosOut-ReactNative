const express = require('express');
const router = express.Router();
const { createPost, likePost, unlikePost, findAllPosts } = require("../services/posts");
const authUser = require("../middleware/auth")
const multer = require('multer');
const { storage } = require('../cloudinary/index');
const upload = multer({ storage });

router.use(authUser);

router.get("/", async (req, res) => {
    try {
        res.send(await findAllPosts());
    } catch (err) {
        res.status(500).send();
    }
})

router.post('/', upload.single("image"), async (req, res) => {
    try {
        res.send(await createPost({
            author: req.userId,
            url: req.file.path,
            uploadDate: new Date(),
            caption: req.body.caption,
            likes: []
        }));
    } catch (err) {
        console.log(err)
        res.status(500).send();
    }
});

router.patch('/like/:postId', async (req, res) => {
    try {
        const { postId } = req.params;
        await likePost(postId, req.userId)
    } catch (err) {
        res.status(500)
        console.log(err)
    }

    res.send()
})

router.patch('/unlike/:postId', async (req, res) => {
    try {
        const { postId } = req.params;
        await unlikePost(postId, req.userId)
    } catch (err) {
        console.log(err)
        res.status(500)
    }

    res.send()
})

module.exports = router;
