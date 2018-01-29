export const APIURL =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:3090/'
    : 'https://gpmeliapp.herokuapp.com/';
