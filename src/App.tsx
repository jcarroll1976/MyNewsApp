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
      <header className='newsHeader'><h1 className='headerTitle'>My Daily News</h1></header>
      <nav>
        <ul className='navList'>
          <li className='navListItem'>News</li>
          <li className='navListItem'>Sports</li>
          <li className='navListItem'>Tech</li>
          <li className='navListItem'>Entertainment</li>
          <li className='navListItem'>Gaming</li>
          <li className='navListItem'>Health</li>
        </ul>
      </nav>
      <div className='grid-container'>
      {articles.map((article,i) =>
      <div className='grid-item'>
      <p key={i}>{article.source.name}</p>
      <p>{article.author}</p>
      <p>{article.title}</p>
      <p><img className="newsImage" src={article.urlToImage} alt=''/></p>
      <p>{article.content}</p>
      <p><a>{article.url}</a></p>
      </div>)}
      </div>
    </div>
  );
}

export default App;
