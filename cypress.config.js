const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      baseUrl: 'http://localhost:3000',
      favourites: 'http://localhost:3000/favorites',
    },
  },
});
