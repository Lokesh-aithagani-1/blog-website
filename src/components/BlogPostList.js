
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
import { useLocation } from 'react-router-dom';
const BlogPosts = () => {
  const [quotes, setQuotes] = useState([]);
  const [visibleQuotes, setVisibleQuotes] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(2);
  const location = useLocation();
  const username = new URLSearchParams(location.search).get('username');
  useEffect(() => {
    
    const fetchQuotes = () => {
      fetch('https://type.fit/api/quotes')
        .then((response) => response.json())
        .then((data) => {
          console.log('Quotes:', data);
          setQuotes(data);
          updateVisibleQuotes(data, startIndex, endIndex);
        })
        .catch((error) => {
          console.error('Fetch quotes error:', error.message);
        });
    };

    
    fetchQuotes();
  }, []); 

  const updateVisibleQuotes = (quotes, start, end) => {
    const visible = quotes.slice(start, end + 1);
    setVisibleQuotes(visible);
  };

  const loadMoreQuotes = () => {
    
    const newStartIndex = endIndex + 1;
    const newEndIndex = newStartIndex + 2;
    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);

    
    updateVisibleQuotes(quotes, newStartIndex, newEndIndex);
  };

  return (
    <div className="blog-posts-container">
         <h2>Welcome, {username}!</h2>
      <h2>Quotes</h2>
      {visibleQuotes.map((quote, index) => (
        <div key={index} className="quote-box">
          <p>{quote.text}</p>
          <p>- {quote.author || 'Unknown'}</p>
        </div>
      ))}
      {quotes.length > endIndex + 1 && (
        <button className="load-more-button" onClick={loadMoreQuotes}>
          Load More
        </button>
      )}
    </div>
  );
};

export default BlogPosts;
