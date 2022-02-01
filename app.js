const express = require('express');
const morgan = require('morgan');


function setup(app) {
  app.use(morgan('dev'));
  app.use('/api/artists', require('./controllers/artists'));

  app.use((error, req, res, next) => {
    console.error(error);

    res.send(400);
  })
}

const init = async (port) => {
  const app = express();

  setup(app);
  
  const server = app.listen(port, () => {
    console.info(`Listening to port ${port}`);
  });

  return {
    app,
    server
  }
}


module.exports = init;