
const API_KEY = process.env.REACT_APP_MBTA_API_KEY;
const DIRECTION_INBOUND = 1;

class MBTAService {

  getStopData(stopId) {
    var URL = `https://api-v3.mbta.com/stops/${stopId}?api_key=${API_KEY}`;
    return (
      fetch(URL)
        .then(response => response.json())
        .then(function(result) {
          return result.data;
        })
    );
  }

  getStopPredictions(stopId) {
    var URL = `https://api-v3.mbta.com/predictions?api_key=${API_KEY}&filter[stop]=${stopId}&filter[direction_id]=${DIRECTION_INBOUND}`;
    return (
      fetch(URL)
        .then(response => response.json())
        .then(function(result) {
          return result.data;
        })
    );
  }

}

const service = new MBTAService();
export default service;
