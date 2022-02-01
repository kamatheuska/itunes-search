const {
  isCollectionNameDuplicated
} = require('./album');

const getITunesParams = (params) => {
  return new URLSearchParams(params).toString();
}

const parseQuery = (query) => {
  const parsedQuery = query.replace(/\s/g, '+');

  return encodeURI(parsedQuery);
}

const handleApiError = (errorMessage = 'Itunes API Error') => {
  throw new Error(errorMessage);
}

const hasApiError = (response) => response.status !== 200;

const filterAlbumDuplicates = (album, index, list) => {
  return index === list.findIndex(isCollectionNameDuplicated(album.collectionName));
}

module.exports = {
  filterAlbumDuplicates,
  getITunesParams,
  handleApiError,
  hasApiError,
  parseQuery,
};