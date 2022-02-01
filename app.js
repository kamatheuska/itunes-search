const express = require('express');
const morgan = require('morgan');
const path = require('path');


function setup(app) {
  const staticsFolder = path.join(__dirname, 'public');
  app.use(morgan('dev'));
  app.use('/api/artists', require('./controllers/artists'));

  app.use(express.static(staticsFolder));
  app.get('/index.html', (req, res) => {
      res.sendFile(path.join(staticsFolder, '/index.html'));
  });

  app.use((error, req, res, next) => {
    console.error(error);

    res.send(400);
  });
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