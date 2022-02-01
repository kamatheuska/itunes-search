const {
  filterAlbumDuplicates,
  getITunesParams,
  handleApiError,
  hasApiError,
} = require('../helpers');

const {
  API_LIMIT,
  ITUNES_BASE_API_URL,
} = require('../config');

const fetch = require('node-fetch');

const buildAlbumsUrl = (artist, params) => {
  const itunesParams = getITunesParams(params);
  const url = `${ITUNES_BASE_API_URL}/search?term=${artist}&${itunesParams}`;

  console.info('Fetching from Itunes: ', url);

  return url;
}

const getAlbums = async (artist, { limit = API_LIMIT } = {}) => {
  const apiParams = {
    entity: 'album',
    limit,
  };

  const url = buildAlbumsUrl(artist, apiParams);
  const response = await fetch(url);
  const body = await response.json();
  const albums = body.results;

  if (hasApiError(response)) handleApiError(body?.errorMessage);

  const uniqueAlbums = albums.filter(filterAlbumDuplicates);

  return uniqueAlbums;
};

module.exports = {
  getAlbums
};