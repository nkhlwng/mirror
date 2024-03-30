import { useEffect, useState } from 'react';
import './MBTA.css';
import MBTAService from '../services/MBTAService';

function MBTA({ stopId, mode }) {
  const [predictions, setPredictions] = useState(null)
  const [stopData, setStopData] = useState(null)

  // ****************************************
  // Initialize
  // ****************************************

  useEffect(() => {
    MBTAService.getStopData(stopId)
      .then(data => setStopData(data));
    function getPredictions () {
      MBTAService.getStopPredictions(stopId)
      .then(data => setPredictions(data));
    }
    getPredictions()
    setInterval(() => {
      getPredictions()
    }, 60 * 1000)
  }, []);

  // ****************************************
  // Render
  // ****************************************




  if (!stopData) {
    return;
  }

  let MBTA_icon = "train"

  if (mode == "Bus"){
    MBTA_icon = "directions_bus"
  }


  const arrival = []

  if (predictions){
    // console.log('predictions', predictions);
    for (const t of predictions){
      if (t != null && t.attributes.arrival_time != null) {  
        const p_arrival=t.attributes.arrival_time
        const date = new Date (p_arrival)
        const minutes = Math.floor(Math.abs((date - new Date())/1000/60))
        let text = `${minutes} minutes`
        if (minutes == 0){
          text = 'Arriving'
        }
        else if (minutes == 1){
          text = '1 minute'
        }
        
        arrival.push(
          <div className='Arrival-Time' key={(p_arrival)}> 
            {text}
          </div>
        )
        if (arrival.length > 2) {
          break
        }
      }
    }
  }
  

  return (
    <div className="MBTA">
      <div className='Header'>
        <span className='material-symbols-outlined'>{MBTA_icon}</span>
        <span className='Stop-Name'>{stopData.attributes.name}</span>
      </div>
      <div className='Arrival-Time'>{arrival}</div>
    </div>
  );
}

export default MBTA;
