import yelp from "../api/yelp";
import { useEffect, useState } from "react";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('')


  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'paris'
        }
      });
      setErrorMessage('')
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong')
    }
  };

  useEffect(() => {
    searchApi('Pasta')
  }, []);

  return [searchApi, results, errorMessage];
}
