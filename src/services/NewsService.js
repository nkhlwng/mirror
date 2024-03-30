
const {XMLParser} = require('fast-xml-parser');


class NewsService {

  getHeadlines () {
    var URL = `https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml`;
    return (
        fetch(URL)
        .then (response => response.text())
            .then(data => {
                // console.log(data)
                const parser = new XMLParser()
                const xml = parser.parse(data)
                return xml.rss.channel.item.slice(0, 5)
            }
        )    
    )
  }
}

const service = new NewsService();
export default service;
