const Activity = require('../models/activity');

const activityControllers = {
    addActivity: async (req, res) => {
      let newActivity = await Activity({ ...req.body });
      try {
        await newActivity.save();
        res.json({ succes: true, response: { ...newActivity } });
      } catch (error) {
        res.json({ success: false, response: error.message });
      }
    },
  
    activityOfItinerary: async (req, res) => {
      try {
        let itineraryActivities = await Activity.find({
          itineraryId: req.params.itineraryId,
        });
        res.json({ success: true, response: itineraryActivities });
      } catch (error) {
        res.json({ success: false, response: error.message });
      }
    },
  };
  
  module.exports = activityControllers;