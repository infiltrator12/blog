import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CircularProgress, Card, CardContent, Typography } from '@mui/material';

const SearchResultsPage = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const query = new URLSearchParams(useLocation().search).get('query');

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/search?query=${query}`);
        const data = await response.json();
        setResults(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchResults();
    }
  }, [query]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <div className="search-results">
      <Typography variant="h4">Search Results for "{query}"</Typography>
      {results.length > 0 ? (
        results.map((result, index) => (
          <Card key={index} className="result-card">
            <CardContent>
              <Typography variant="h5">{result.title}</Typography>
              <Typography variant="body2">{result.content}</Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography>No results found.</Typography>
      )}
    </div>
  );
};

export default SearchResultsPage;
