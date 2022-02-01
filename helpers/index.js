const {
  isCollectionNameDuplicated
} = require('./album');

const filterAlbumDuplicates = (album, index, list) => {
  return index === list.findIndex(isCollectionNameDuplicated(album.collectionName));
}

module.exports = {
  filterAlbumDuplicates,
};