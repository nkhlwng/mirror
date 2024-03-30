import { useEffect, useState } from 'react';
import CalendarService from '../services/CalendarService';

import './Calendar.css';

const CALENDAR_URLS = process.env.REACT_APP_CALENDAR_URLS.split(',');

function Calendar() {
  const [events, setEvents] = useState(new Date());

  // ****************************************
  // Initialize
  // ****************************************

  useEffect(() => {
    CalendarService.getEvents(CALENDAR_URLS);
  }, [])

  // ****************************************
  // Render
  // ****************************************

  if (!events) {
    return;
  }

  return (
    <div className="Calendar">
      Calendar
    </div>
  );
}

export default Calendar;
