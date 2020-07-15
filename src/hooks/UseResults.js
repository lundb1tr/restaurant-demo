import { useState, useEffect } from 'react';
import Yelp from '../api/Yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {
    try {
      const response = await Yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'mishawaka',
        },
      });
      setResults(response.data.businesses);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Something went wrong');
    }
  };

  /* Call searchApi when component is rendered */
  /* This is bad code */
  /* searchApi('pasta'); */
  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
};
