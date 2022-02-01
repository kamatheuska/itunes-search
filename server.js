const init = require('./app');

const {
  PORT,
} = require('./config');


init(PORT).catch(console.error);
