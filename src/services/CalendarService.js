
class CalendarService {

  getEvents(urls) {
    return (
      Promise
        .all(
          urls.map((url) => fetch(url))
        )
        .then((results) => {
          console.log('events', results);
          return results;
        })
    );
  }

}

const service = new CalendarService();
export default service;
