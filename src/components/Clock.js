import { useEffect, useState } from 'react';
import './Clock.css';

function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setNow(new Date());
    }, 5000)
  }, [])

  return (
    <div className="Clock">
      <span className="Time">{now.toLocaleTimeString('en-US', {hour: "numeric", minute: "2-digit"})}</span><br/>
      <span className="Date">{now.toLocaleDateString('en-US', {weekday: 'long', month: 'long', day: 'numeric'})}</span><br/> 
    </div>
  );
}

export default Clock;
