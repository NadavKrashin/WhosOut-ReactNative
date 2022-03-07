const express = require('express');
const router = express.Router();
const { getAllEvents, getEventsByDateRange, createEvent } = require("../services/events");
const authUser = require("../middleware/auth")

router.use(authUser);

router.post('/', async (req, res) => {
    const { name, user, start, color, end } = req.body

    try {
        await createEvent({ name, user, start, color, end });
    } catch (err) {
        console.log(err)
        res.status(500)
    }

    res.send()
});

router.get('/', async (req, res) => {
    try {
        const events = await getAllEvents();
        res.send(events)
    } catch (err) {
        res.stats(500).send()
    }
})

router.get('/:start/:end', async (req, res) => {
    const { start, end } = req.params;
    try {
        const events = await getEventsByDateRange(start, end);
        res.send(events)
    } catch (err) {
        res.status(500).send()
    }
})

module.exports = router;
