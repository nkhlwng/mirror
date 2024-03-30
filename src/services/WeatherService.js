
const API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;

class WeatherService {

  getForecast(lat, lng) {
    var URL = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&exclude=minutely,alerts&units=imperial&appid=${API_KEY}`;
    return (
      fetch(URL)
        .then(response => response.json())
    );
  }

}

const service = new WeatherService();
export default service;
