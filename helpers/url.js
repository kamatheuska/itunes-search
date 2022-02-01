const {
  getITunesParams,
} = require('./query');

const {
  ITUNES_BASE_API_URL,
} = require('../config');

const buildAlbumsUrl = (artist, params) => {
  const itunesParams = getITunesParams(params);
  const url = `${ITUNES_BASE_API_URL}/search?term=${artist}&${itunesParams}`;

  console.info('Fetching from Itunes: ', url);

  return url;
}

module.exports = {
  buildAlbumsUrl
}