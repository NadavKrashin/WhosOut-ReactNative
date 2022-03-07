const Event = require("../models/Event");

const findAllEvents = async () => {
    return await Event.find({});
}

const findEventsByDateRange = async (start, end) => {
    return await Event.find({ start: { $gte: start }, end: { $lte: end } }).populate("user")
}

const addEvent = async (event) => {
    await Event.create(event);
}

module.exports = {
    findAllEvents,
    findEventsByDateRange,
    addEvent
}