const getITunesParams = (params) => {
  return new URLSearchParams(params).toString();
}

const parseQuery = (query) => {
  const parsedQuery = query.replace(/\s/g, '+');

  return encodeURI(parsedQuery);
}

module.exports = {
  getITunesParams,
  parseQuery,
};