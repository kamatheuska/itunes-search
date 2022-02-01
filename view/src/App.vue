<template>
  <div class="container">
    <main class="main">
      <h1>Search on Itunes</h1>
      <section class="section section__form">
        <form class="form" @submit.prevent="getAlbums">
          <input v-model="form.artist" type="text" name="search" />
          <br>
          <button type="submit">SEARCH</button>
        </form>
      </section>
      <section>
        <template v-if="hasSearched">
          <div class="grid" v-if="hasAlbums">
            <a
              v-for="album in albums"
              :key="album.collectionId"
              :href="album.collectionViewUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="album"
            >
              <figure>
                <img :src="album.artworkUrl100" :alt="album.collectionName" />
                <h3>
                  {{ album.collectionName }}
                </h3>
                <p class="album__copyright">
                  {{ album.copyright }}
                </p>
              </figure>
            </a>
          </div>
          <div v-else>
            <p>No albums found for this artist</p>
          </div>
        </template>

      </section>
    </main>
  </div>
</template>

<script>
import { getAlbumsFromArtist } from './services/album';

const parseQuery = (query) => {
  const parsedQuery = query.replace(/\s/g, '+');

  return encodeURI(parsedQuery);
};

export default {
  name: 'App',

  data: () => ({
    albums: [],
    hasSearched: false,
    form: {
      artist: '',
    },
  }),

  computed: {
    parsedArtist() {
      return parseQuery(this.form.artist);
    },
    hasAlbums() {
      return this.albums?.length;
    },
  },

  methods: {
    async getAlbums() {
      try {
        const artist = this.parsedArtist;
        const albums = await getAlbumsFromArtist(artist);

        this.albums = albums;
      } catch (error) {
        console.error(error);
      } finally {
        this.hasSearched = true;
      }
    },
  },
};
</script>
<style scoped>
.container {
  color: white;
  display: flex;
  justify-content: center;
  padding: 5rem 3rem;
  text-align: center;
}

.main {
  grid-column: 2 / span 1;
}
.main h1 {
  font-size: 4rem;
}
.section {
  padding: 10px 5px;
}
.section__form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form {
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form input {
  width: 100%;
  font-family: inherit;
}
.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.album {
  margin-bottom: 1rem;
}
.album figure {
  border: 2px solid black;
  width: 200px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 1em;
  background-color: rgba(49, 47, 47, 0.7);
  border: none;
  transition: background-color ease-in 0.2s;
}
.album figure:hover {
  background-color: rgba(68, 68, 68, 0.7);
}

.album img {
  object-fit: contain;
  flex-basis: 100%;
}

.album__copyright {
  font-size: 0.8rem;
}

@media all and  (min-width: 800px) {
  .container {
    padding: 5rem 3rem;
  }
  .main {
    max-width: 70vh;
  }
}
</style>
