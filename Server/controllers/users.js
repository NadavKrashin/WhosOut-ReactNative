const express = require('express');
const router = express.Router();
const { loginUser } = require("../services/users");

router.post('/login', async (req, res) => {
    const { username, password } = req.body
    const user = await loginUser(username, password)
    res.send(user);
});

module.exports = router;
