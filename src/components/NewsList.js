import React, { useEffect, useState } from 'react';
import { getNews } from '../services/api';
import NewsItem from './NewsItem';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const articles = await getNews();
      setNews(articles);
    };

    fetchNews();
  }, []);

  return (
    <div className="news-list">
      {news.map((article) => (
        <NewsItem key={article.url} {...article} />
      ))}
    </div>
  );
};

export default NewsList;
