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

module.exports = {
  getITunesParams,
  handleApiError,
  hasApiError,
  parseQuery,
};