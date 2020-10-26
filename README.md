# Hella Hungry (C39)

## Before you start this exercise

- `git clone` this repo
- `cd` into it, then run the following:

```
$ yarn install
$ cd client & yarn install
$ cd ..
$ yarn dev
```

## The challenge

1. Look at my React App. It doesn't work. I am sad. :(
2. I also didn't read the API directions very well. It says I need both the API and something called an Authorization Header?
3. The good news is that I DO have an API key for Yelp; it's [this string of letters](https://gist.githubusercontent.com/ErnieAtLYD/b8f45ad94a03de5c827ce6c021ee9046/raw/42ed271804bddc1f1f74cd157cd03c37d43357ce/gistfile1.txt). I just don't know what to do with it.

## Iterations

### Iteration 1: Figure out how the API works

- [ ] Read the Yelp API docs to see [how they implement the Yelp REST API](https://www.yelp.com/developers/documentation/v3/authentication)
- [ ] Read this [Medium article on how this dev made an API call to Yelp](https://medium.com/@chaoyue_zhao/how-to-make-axios-api-calls-with-yelp-fusion-inside-react-js-10755d8485c5). Important note: we'll be storing the `.env` file in a different place than she will.
- [ ] Verify the API works by using Postman or Insomnia, and then doing the following:
  - Make a GET request to `https://api.yelp.com/v3/businesses/search?location="2650 NW 5 Ave, Miami, FL 33127"&term="lunch"&radius=300` using a Bearer token. These are docs on how to use a bearer token [using the Insomnia API client](https://support.insomnia.rest/article/38-authentication) and [using Postman](https://learning.postman.com/docs/sending-requests/authorization/#bearer-token).
    - HINT 1: Check the Yelp docs on what to pass.
    - HINT 2: Put the API Key in the request header as `Authorization: Bearer <YOUR API KEY>`. You'll want to replace that last part with the API key.

### Iteration 2: Create a proxy API

- [ ] In your `/server.js`, Create a GET route called `/api/places`.
  - HINT: Take a look [at the code block at the end of our Intro to Express lecture](https://www.notion.so/Intro-to-APIs-and-Express-6a57971287594e17b87d4074ab30f124), especially the syntax for `app.get()` and `res.json()`.
- [ ] Inside the route, use an axios call to call the API above.
  - If you're using promises, don't forget your catch!
  - If you're using async/await, don't forget to nest it in a `try/catch`!
- [ ] Modify the GET call to include the Authorization Header and add the Bearer API key.
- [ ] If you're able to make the GET request and you're using axios, use `res.json()` to return the `data.businesses` property of the axios response.
- [ ] Make the `catch` return a status code of 500.
  - HINT: `res.status(500).send({ error: e.message });`

### Iteration 3: Swap out the React API call

- [ ] Swap out the Axios call inside `/client/App.jsx` from what it was to `/api/places`.

### Iteration 4: Put an API key in the .env file

- [ ] Create the `.env` file. NOTE: `.env` is included in your `.gitignore` file, which means _we will never check this into GitHub._
- [ ] Add the API key and name it `YELP_API_KEY`
- [ ] Replace the hard-coded API key in `/server.js` with `process.env.YELP_API_KEY`

### Iteration 4: Create a sample file

- [ ] `cp .env .env.sample`
- [ ] Modify `.env.sample` to remove the API key

### Iteration 5: Push to Heroku

- [ ] Attempt to push to Heroku
- [ ] Add the `YELP_API_KEY` key to Heroku separately
  - HINT 1: Check out this page in Heroku to learn [how to set configuration variables](https://devcenter.heroku.com/articles/config-vars).
