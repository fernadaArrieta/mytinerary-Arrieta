const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    itineraryId: {type: mongoose.Types.ObjectId, ref: "itinerary"}
})

const Activity = mongoose.model('activity', ActivitySchema)

module.exports = Activity;