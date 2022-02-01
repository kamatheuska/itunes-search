const {
  getAlbums
} = require('../services/albums');

const {
  parseQuery
} = require('../helpers/query');

const getAlbumsFromArtist = async (req, res, next) => {
  const artist = req.params.artist;
  
  try {
    const parsedArtist = parseQuery(artist);
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

