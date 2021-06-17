/** @type {import("snowpack").SnowpackUserConfig } */
require('dotenv').config();

module.exports = {
  mount: {
    public: '/',
    src: '/dist',
  },
  plugins: [
    /* ... */
    '@snowpack/plugin-svelte',
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    bundle: true,
    minify: true,
    // splitting: true,
    sourcemap: false,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    baseUrl: process.env.NODE_ENV == 'test' ? '' : '/home',
    metaUrlPath: '/dist',
  },
};
