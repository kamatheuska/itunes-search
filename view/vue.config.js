const path = require('path');

module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:6754',
      },
    },
  },
  outputDir: path.resolve(__dirname, '..', 'public'),
};
