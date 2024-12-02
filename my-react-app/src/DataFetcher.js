import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);   


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await   
 axios.get('https://jsonplaceholder.typicode.com/posts'); // Replace with your API endpoint
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div> 

      <h2>User ID: {data.userId}</h2>
      <h2>ID: {data.id}</h2>
      <h2>Title: {data.title}</h2>
      <p>Body: {data.body}</p>
    </div>
  );
}

export default DataFetcher;