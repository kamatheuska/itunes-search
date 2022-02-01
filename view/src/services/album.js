/* eslint-disable import/prefer-default-export */
const BASE_URL = '/api/artists';

export const getAlbumsFromArtist = async (artist) => {
  try {
    const url = `${BASE_URL}/${artist}/albums`;
    const response = await fetch(url);
    const body = await response.json();

    return body.results;
  } catch (error) {
    console.error(error);
  }
};
