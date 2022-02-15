const path = require('path');

// eslint-disable-next-line no-unused-vars
module.exports = function override(config, env) {
  // eslint-disable-next-line no-unused-vars
  config.resolve = {
    ...config.resolve,
    alias: {
      '@/components': path.resolve(__dirname, './src/components'),
      '@/features': path.resolve(__dirname, './src/features'),
      '@/pages': path.resolve(__dirname, './src/pages'),
      '@/hooks': path.resolve(__dirname, './src/hooks'),
      '@/resources': path.resolve(__dirname, './src/resources'),
      '@/types': path.resolve(__dirname, './src/types'),
      '@/utils': path.resolve(__dirname, './src/utils'),
    },
  };
  return config;
};
