import { useEffect, useState } from 'react';
import { PlacesAPI } from './apis/placesAPI';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [places, setPlaces] = useState(0);

  useEffect(() => {
    PlacesAPI.placeSearch({
      query: 'bar',
    }).then((data) => {
      setPlaces(data);
      console.log(data);
    });
  }, []);

  return <div className="App">{places}</div>;
}

export default App;
