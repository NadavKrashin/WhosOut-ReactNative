const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken")
const authUser = require("../middleware/auth");
const { loginUser, getUserById, findUserGroup, changeUserStatusById, changeUserPhraseById, changeUserPasswordById } = require("../services/users");

router.post('/login', async (req, res) => {

    const { username, password } = req.body
    try {
        const user = await loginUser(username, password)
        if (!user) {
            res.status(401).send()
        } else {
            const accessToken = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '24h' });
            res.json({ user, accessToken });
        }
    } catch (err) {
        console.log(err)
        res.status(500).send()
    }
});

router.get("/exists", authUser, async (req, res) => {
    try {
        const user = await getUserById(req.userId);
        console.log(user)
        res.send(user);
    } catch (err) {
        res.status(500).send();
    }
})
router.get("/:id", authUser, async (req, res) => {

    try {
        const user = await getUserById(req.params.id);
        res.send(user);
    } catch (err) {
        res.status(500).send();
    }
})

router.get("/:userId/group", async (req, res) => {
    try {
        const group = await findUserGroup(req.params.userId);
        res.send(group);
    } catch (err) {
        res.status(500).send();
    }
})

router.patch("/:userId/status", async (req, res) => {
    try {
        await changeUserStatusById(req.params.userId, req.body.status);
        res.send();
    } catch (err) {
        res.status(500).send();
    }
})

router.patch("/:userId/phrase", async (req, res) => {
    try {
        await changeUserPhraseById(req.params.userId, req.body.phrase);
        res.send();
    } catch (err) {
        res.status(500).send();
    }
})

router.patch("/:userId/password", async (req, res) => {
    try {
        await changeUserPasswordById(req.params.userId, req.body.password);
        res.send();
    } catch (err) {
        res.status(500).send();
    }
})

module.exports = router;
