import { useEffect, useState } from 'react'

import './App.css'
import config from './utils/app.config';
import { toTitleCase } from './utils/string';

function App() {
  const [data, setData] = useState<string>();

  useEffect(() => {
    const fetchDataForPosts = async () => {
      try {
        const response = await fetch(config.apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        console.log({response})

        const postsData = await response.text();
        setData(postsData);
      } catch (err) {
        setData(undefined);
      }
    };

    fetchDataForPosts();
  }, [])
  return (
    <>
      <h1>{config.appName}</h1>
      <h3>{toTitleCase(data ?? "no data from server")}</h3>
    </>
  )
}

export default App
