const request = require('supertest');
const init = require('../app');

jest.setTimeout(30000);
process.env.NODE_ENV = 'test';

const setupTests = () => {
  const port = 9899;

  return init(port).catch(console.error);
};

let createdApp;
let createdServer;
let response;

const handleTestError = (error) => {
  if (!error) return;

  console.error(error);
  process.exit(1);
}


describe('🌳  Integration tests', () => {

  beforeAll(async () => {
   try {
      const { app, server } = await setupTests();

      createdApp = app;
      createdServer = server;
    } catch (error) {
      handleTestError(error);
    }
  });

  afterAll((() => createdServer.close(handleTestError)));

  describe('🌴 GET /api/itunes', () => {
    it('🌱 should return the itunes albums', async () => {
      const artist = 'Tom+Jobim';
      const response = await request(createdApp).get(`/api/artists/${artist}/albums`);
      expect(response.status).toBe(200);
      expect(response.body.resultCount).toBeDefined();
      expect(response.body.results.length).toBeDefined();
    });
  });
});