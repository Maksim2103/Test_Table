import { useState, useEffect } from 'react';

export const useFetchData = (apiUrl) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getContacts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(apiUrl);
        const results = await response.json();
        setData(results);
        setIsError(false);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getContacts();
  }, [apiUrl]);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useFetchData;
