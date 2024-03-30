// import Calendar from './components/Calendar';
import Clock from './components/Clock';
import MBTA from './components/MBTA';
import News from './components/News';
import Weather from './components/Weather';


import './App.css';

const HOME_LAT = '42.347490573108736';
const HOME_LNG = '-71.12016150121171';

function App() {
  return (
    <div className="App">
      <Clock />
      {/* Babcock Street T */}
      <MBTA stopId="place-babck" mode="Subway" /> 
      {/* Coolidge Corner T */}
      <MBTA stopId="place-cool" mode="Subway" /> 
      {/* Pleasant Street Bus */}
      <MBTA stopId="934" mode="Bus" /> 
      <News />
      <Weather lat={HOME_LAT} lng={HOME_LNG} />
    </div>
  );
}

export default App;
