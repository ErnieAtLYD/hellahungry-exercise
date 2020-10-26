if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');

/**
 * Our server routes will go here.
 */
const getYelpAPI = async () => {
  // - [x] Modify the GET call to include the Authorization Header and add
  //       the Bearer API key.

  return await axios.get(
    'https://api.yelp.com/v3/businesses/search?location="2650 NW 5 Ave, Miami, FL 33127"&term="lunch"&radius=300',
    {
      headers: {
        Authorization: `Bearer ${process.env.YELP_API_KEY}`
      }
    }
  );
};

// - [x] In your `/server.js`, Create a GET route called `/api/places`.
app.get('/api/places', async (req, res, next) => {
  // - [ ] Inside the route, use an axios call to call the API above.
  //   - If you're using promises, don't forget your catch!
  //   - If you're using async/await, don't forget to nest it in a `try/catch`!
  try {
    const resp = await getYelpAPI();
    // console.log(resp.data);
    // FIX ME, something needs a little bit of tweaking
    res.json(resp.data.businesses);
  } catch (e) {
    // - [x] Have the `catch` return a status code of 500.
    //   - HINT: `response.status(500).send({ error: e.message });`
    console.log(e);
    res.status(500).send({ error: e.message });
  }
  // - [x] If you're able to make the GET request and you're using axios, use
  //       `response.json` to return the`data.businesses` property of the
  //       axios response.
});

/**
 * For your sanity, don't edit anything below this line, or else it may
 * mess up the way Heroku builds React pages.
 */
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});
