const {
  getITunesParams,
} = require('../helpers');

const {
  API_LIMIT,
  ITUNES_BASE_API_URL,
} = require('../config');

const fetch = require('node-fetch');

const handleApiError = (errorMessage = 'Itunes API Error') => {
  throw new Error(errorMessage);
}

const hasApiError = (response) => response.status !== 200;

const getAlbums = async (artist, { limit = API_LIMIT } = {}) => {
  const apiParams = {
    entity: 'album',
    limit,
  };

  const params = getITunesParams(apiParams);
  const url = `${ITUNES_BASE_API_URL}/search?term=${artist}&${params}`;

  console.info('Fetching from Itunes: ', url);

  const response = await fetch(url);
  
  const body = await response.json();

  if (hasApiError(response)) handleApiError(body?.errorMessage);

  return body;
};

module.exports = {
  getAlbums
};