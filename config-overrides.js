const path = require('path');

// eslint-disable-next-line no-unused-vars
module.exports = function override(config, env) {
  // eslint-disable-next-line no-unused-vars
  config.resolve = {
    ...config.resolve,
    alias: {
      '@/components': path.resolve(__dirname, './src/components'),
    },
  };
  return config;
};
