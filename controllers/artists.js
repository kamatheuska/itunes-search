const router = require('express').Router();
const {
  getAlbumsFromArtist,
} = require('../middleware/artists');

router.get('/:artist/albums', getAlbumsFromArtist);

module.exports = router;
