const Activity = require('../models/activity');

const activityControllers = {
  
    addActivity: async (req,res) => {
      const {title,image,itineraryId} = req.body
      new Activity ({title,image,itineraryId}).save()
      .then(response => res.json({response}))
  },
  
    activityOfItinerary: async (req, res) => {
      try {
        let itineraryActivities = await Activity.find({
          itineraryId: req.params.itineraryId,
        });
        res.json({ success: true, response: {itineraryActivities} });
      } catch (error) {
        res.json({ success: false, response: error.message });
      }
    },
  };
  
  module.exports = activityControllers;