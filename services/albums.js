const {
  filterAlbumDuplicates,
} = require('../helpers');

const {
  handleApiError,
  hasApiError,
} = require('../helpers/error');

const {
  buildAlbumsUrl
} = require('../helpers/url');

const {
  API_LIMIT,
} = require('../config');

const fetch = require('node-fetch');

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