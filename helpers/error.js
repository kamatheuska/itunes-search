const handleApiError = (errorMessage = 'Itunes API Error') => {
  throw new Error(errorMessage);
}

const hasApiError = (response) => response.status !== 200;


module.exports = {
  handleApiError,
  hasApiError,
};