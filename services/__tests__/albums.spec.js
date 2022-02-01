jest.mock('../../helpers');
jest.mock('../../helpers/error');
jest.mock('../../helpers/url');
jest.mock('node-fetch');

const {
  filterAlbumDuplicates,
} = require('../../helpers');

const {
  hasApiError,
} = require('../../helpers/error');

const {
  buildAlbumsUrl
} = require('../../helpers/url');
const {
  API_LIMIT,
} = require('../../config');

const {
  getAlbums
} = require('../albums');

const fetch = require('node-fetch');

describe('🌳  Services', () => {
  beforeEach(() => {
    fetch.mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        results: [
          {
            title: 'Some Rock Album'
          }
        ]
      })
    }));
  });

  describe('🌴 Albums', () => {
    describe('🍉 getAlbums', () => {

      it('🌱 returns an array', async () => {
        const artist = 'Some Artist';
        filterAlbumDuplicates.mockImplementation(() => [
          {
            title: 'Some Rock Album'
          }
        ]);
        
        const albums = await getAlbums(artist);   

        expect(albums).toHaveLength(1);
      });

      it('🌱 buildAlbumsUrl should have been called', async () => {
        const artist = 'Some Artist';

        await getAlbums(artist);

        expect(buildAlbumsUrl).toHaveBeenCalled();
        expect(buildAlbumsUrl).toHaveBeenCalledWith(artist, {
          entity: 'album',
          limit: API_LIMIT,
        });
      });

      it('🌱 buildAlbumsUrl should have been called with the passed limit', async () => {
        const artist = 'Some Artist' ;

        await getAlbums(artist, { limit: 25 });

        expect(buildAlbumsUrl).toHaveBeenCalled();
        expect(buildAlbumsUrl).toHaveBeenCalledWith(artist, {
          entity: 'album',
          limit: 25,
        });
      });

      it('🌱 hasApiError should have been called', async () => {
        await getAlbums();

        expect(hasApiError).toHaveBeenCalled();
      });

      it('🌱 fetch should have been called', async () => {
        const url = 'some/stub/url'
        buildAlbumsUrl.mockImplementation(() => url);

        await getAlbums();

        expect(fetch).toHaveBeenCalled();
        expect(fetch).toHaveBeenCalledWith(url);
      });

      it('🌱 filterAlbumDuplicates should have been called', async () => {
        await getAlbums();
        expect(filterAlbumDuplicates).toHaveBeenCalled();
      });
    
    });
  });
});