const {
  filterAlbumDuplicates
} = require('../');



const albumsFactory = (mockAlbums = []) => [
  {
    collectionName: 'FooBar Album',
  },
  {
    collectionName: 'Feh Album',
  },
  ...mockAlbums
]

let albums;
let result;

describe('🌳  helpers', () => {
  describe('🌴 filterAlbumDuplicates', () => {
    it('🌱 should return unique albums', () => {
      const duplicatedAlbumName = 'FooBar Album';

      albums = albumsFactory([{
        collectionName: duplicatedAlbumName,
      }]);

      result = albums.filter(filterAlbumDuplicates);
      expect(result).toHaveLength(2);
    });

    it('🌱 should return all albums if there are no duplicates', () => {
      albums = albumsFactory();
      result = albums.filter(filterAlbumDuplicates);

      expect(result).toHaveLength(2);
    });
  });
});