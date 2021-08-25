export const getTopStories = () => {
    const url = 'https://hacker-news.firebaseio.com/v0/topstories.json';
    return fetch(url)
      .then(response => response.json())
      .then(data => {
  
        const top10 = data.slice(0, 10);
       
  
        return top10;
  
      });
  
  }