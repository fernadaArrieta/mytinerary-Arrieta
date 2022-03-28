import axios from "axios";

const activitiesActions = {
  activityOfItinerary: (itineraryId) => {
    return async (dispatch, getState) => {
      try {
        let response = await axios.get(
          `http://localhost:4000/api/v1/tineraries/activities/${itineraryId}`
        );
        return { success: true, response: response.data.response };
      } catch (error) {
        return {
          success: false,
          response: error,
        };
      }
    };
  },
};
export default activitiesActions;