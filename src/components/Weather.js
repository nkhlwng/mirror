import { useEffect, useState } from 'react';
import './Weather.css';
import WeatherService from '../services/WeatherService';

function Weather({ lat, lng }) {
  const [forecast, setForecast] = useState(null)
  
  // ****************************************
  // Initialize
  // ****************************************

  useEffect(() => {
    function getForecast() {
      WeatherService.getForecast(lat, lng)
        .then(data => {
          //console.log('forecast', data);
          setForecast(data);
        });
    }
    getForecast()
    setInterval(() => {
      getForecast()
    }, 60 * 60 * 1000)
  }, []);

  // ****************************************
  // Render
  // ****************************************

  if (!forecast) {
    return;
  }

  let icon = weather_icon(forecast.current.weather[0].main, forecast.current.weather[0].description);

  function weather_icon (main, description){
    let icon
    if (main == "Clouds"){
      if (description == "scattered clouds" || description == "broken clouds"){
        icon = 'partly_cloudy_day'
      }
      else{
        icon = "cloud"
      }
    } 
    else if (main == "Rain" || main == "Drizzle"){
      icon = "rainy"
    }  
    else if (main == "Snow"){
      icon = "weather_snowy"
    }
    else if (main == "Thunderstorm"){
      icon = "thunderstorm"
    }
    else if (main == "Clear"){
      icon = "sunny"
    }
    else {
      icon = "airwave"
    } 
    return icon
  }
  
  let weekly_min = 150
  let weekly_max = -100
  
  for (const f of forecast.daily){
    if (f.temp.min < weekly_min) {
      weekly_min = f.temp.min
    }
    if (f.temp.max > weekly_max) {
      weekly_max = f.temp.max
    }
  }

  // Create daily forecasts

  const daily = []

  for (const f of forecast.daily){
    const date = new Date(f.dt*1000)
    const icon = weather_icon(f.weather[0].main, f.weather[0].description)
    const min_percent = ((f.temp.min - weekly_min) / (weekly_max - weekly_min)) * 100
    const max_percent = (1 - ((weekly_max - f.temp.max) / (weekly_max - weekly_min))) * 100 
    const bar_length = max_percent - min_percent
    daily.push(
      <tr key={f.dt}>
        <td>{date.toLocaleDateString('en-us', {weekday:'short'})}</td>
        <td><span className="material-symbols-outlined">{icon}</span></td>
        <td><span className='Min'>{Math.round(f.temp.min)}&deg; F</span></td>
        <td style={{ padding:'0 5px', width:'100px'}}><span className='Bar' style={{ marginLeft:`${min_percent}%`, width:`${bar_length}%` }}></span> </td>
        <td><span className='Max'>{Math.round(f.temp.max)}&deg; F</span></td>
      </tr>
    )
  }

  return (
    <div className="Weather">
      <span className="Current">
        {Math.round(forecast.current.temp)}&deg; F
        <span className="material-symbols-outlined">{icon}</span>
      </span>
      <div className='Daily-Forecasts'>
        <table>
          <tbody>
            {daily}
          </tbody> 
        </table>
      </div>
    </div>
  );
}


export default Weather;
