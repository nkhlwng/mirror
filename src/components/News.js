import { useEffect, useState } from 'react';
import './News.css';
import NewsService from '../services/NewsService';

function News() {
  const [headlines, setHeadlines] = useState(null)

  // ****************************************
  // Initialize
  // ****************************************

  useEffect(() => {
    function getHeadlines () {
      NewsService.getHeadlines()
      .then(data => setHeadlines(data));
    }
    getHeadlines()
    setInterval(() => {
      getHeadlines()
    }, 60 * 1000)
  }, []);

  // ****************************************
  // Render
  // ****************************************
  
  if (!headlines) {
    return;
  }

  console.log(headlines)

  const stories = []

  for (const headline of headlines) {
    stories.push(
        <div className='Article' key={headline.guid}>{headline.title}</div>
    )
  }
 
  return (
    <div className="News">{stories}</div>
  );
}

export default News;
