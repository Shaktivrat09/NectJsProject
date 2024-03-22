import { useState } from 'react';
import { useEffect } from 'react';

const NewsInterview = () => {
  const [newsInterviews, setNewsInterviews] = useState([]);

  useEffect(() => {
    const data = require('../data/dummy-data.js');
    setNewsInterviews(data.newsInterviews);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">News & Interview</h2>
      <ul>
        {newsInterviews.map(({ id, title, date }) => (
          <li key={id} className="mb-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p>Date: {date}</p>
          </li>
        ))}