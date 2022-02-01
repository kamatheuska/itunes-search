// https://docs.cypress.io/api/introduction/api.html

describe('Itunes Search e2e tests', () => {
  const ARTISTS = [
    'Lady Gaga',
    'Elton John',
    'Tom Jobim',
  ];
  describe('Search for known artists', () => {
    ARTISTS.forEach((artist) => {
      it(`should return albums for a recognized artist: ${artist}`, () => {
        cy.visit('/');
        cy.contains('[data-cy="title"]', 'Search on Itunes');
        cy.get('[data-cy="artist-input"]').type(artist);
        cy.get('[data-cy="submit-button"]').click();
        cy.contains('[data-cy="albums"]', artist);
      });
    });
  });

  describe('Invalid search', () => {
    it('should show a message if no artists were found', () => {
      cy.visit('/');
      cy.contains('[data-cy="title"]', 'Search on Itunes');
      cy.get('[data-cy="artist-input"]').type('not an actual artist');
      cy.get('[data-cy="submit-button"]').click();
      cy.contains('[data-cy="no-albums-found"]', 'No albums found for this artist');
    });
  });
});
