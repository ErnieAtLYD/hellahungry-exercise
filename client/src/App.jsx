import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';
import './App.sass';

const App = () => {
  const [places, setPlaces] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const callOurYelpAPI = async () => {
      try {
        // FIX ME
        const resp = await axios.get(
          'https://api.yelp.com/v3/businesses/search?location="2650 NW 5 Ave, Miami, FL 33127"&term="lunch"&radius=300'
        );
        setPlaces(resp.data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    };

    callOurYelpAPI();
  }, []);
  return (
    <div id="app" className="container">
      <h1 className="title">Wyncode Does Lunch</h1>
      {isError && <div className="err">Oh no, something went wrong :(</div>}
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="tile is-ancestor" style={{ flexWrap: 'wrap' }}>
          {places.length &&
            places.map((place) => <Card key={place.id} place={place} />)}
        </div>
      )}
    </div>
  );
};

export default App;
