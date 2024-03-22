import { useState } from 'react';
import { useEffect } from 'react';

const MarketStories = () => {
  const [marketStories, setMarketStories] = useState([]);

  useEffect(() => {
    const data = require('../data/dummy-data.js');
    setMarketStories(data.marketStories);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Market Stories</h2>
      <ul>
        {marketStories.map(({ id, title, comments, sentiment }) => (
          <li key={id} className="mb-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p>Sentiment: {sentiment}</p>
            <p>Comments: {comments}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarketStories;