import React, { useEffect, useState } from 'react';
import {Articles} from './models/Articles';
import './App.css';
import { fetchNews } from './services/NewsApiService';

function App() {
  const [articles,setArticles] = useState<Articles[]>([]);

  useEffect(()=> {
    fetchNews().then(data => {
      setArticles(data);
    })
  },[])

  return (
    <div className="App">
      {articles.map((article,i) =>
      <div>
      <p key={i}>{article.source.name}</p>
      <p>{article.author}</p>
      <p>{article.title}</p>
      <p><img className="newsImage" src={article.urlToImage} alt=''/></p>
      </div>)}
      
    </div>
  );
}

export default App;
