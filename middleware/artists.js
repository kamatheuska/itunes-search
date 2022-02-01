const {
  getAlbums
} = require('../services/albums');

const {
  parseQuery
} = require('../helpers');

const getAlbumsFromArtist = async (req, res, next) => {
  const artist = req.params.artist;
  const parsedArtist = parseQuery(artist);

  try {
    if (!parsedArtist) throw new Error('Please provide an artist');

    const albums = await getAlbums(parsedArtist);
    res.send({ results: albums });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAlbumsFromArtist
}

