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

### Iteration 0: Figure out how the API works

- [ ] Read the Yelp API docs to see how they implement the Yelp REST API
- [ ] Read the medium article
- [ ] Verify the API works by using Postman or Insomnia

### Iteration 1: Create a proxy API

- [ ] Create a GET route called `/api/places`
- [ ] Have it call a function and nest it in a try/catch.
- [ ] Have the catch return a status code of 500.

### Iteration 2: Add the Authentication token to the proxy

- [ ] Modify the axios GET call to include the Authorization Header and add the Bearer API key

### Iteration 3: Put an API key in the .env file

- [ ] Create the .env file
- [ ] Add the API key and name it `YELP_API_KEY`
- [ ] Replace the hard-coded API key with `process.env.YELP_API_KEY`

### Iteration 4: Create a sample file

- [ ] `cp .env .env.sample`
- [ ] Modify `.env.sample` to remove the API key

### Iteration 5: Push to Heroku

- [ ] Attempt to push to Heroku
- [ ] Add the YELP_API_KEY key to Heroku
