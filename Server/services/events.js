const {   findAllEvents,
    findEventsByDateRange,
    addEvent } = require("../repositories/events");


    const getAllEvents = async () =>{
        return await findAllEvents()
    }

    const getEventsByDateRange = async (start,end) =>{
        return await findEventsByDateRange(start,end)
    }

    const createEvent = async (event) =>{
        return await addEvent(event)
    }

module.exports = { getAllEvents,getEventsByDateRange,createEvent }
