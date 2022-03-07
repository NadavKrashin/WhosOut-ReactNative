const express = require('express');
const router = express.Router();
const { createGroup, createUserInGroup } = require("../services/groups");
const authUser = require("../middleware/auth")

router.use(authUser);

router.post('/', async (req, res) => {
    const { users } = req.body
    try {
        await createGroup({ users });
    } catch (err) {
        res.status(500)
    }

    res.send()
});

router.patch('/:groupId/:userId', async (req, res) => {
    try {
        const { userId, groupId } = req.params;
        await createUserInGroup(userId, groupId)
    } catch (err) {
        res.stats(500)
    }

    res.send()
})

module.exports = router;
