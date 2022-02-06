// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    tailwindConfig: "./tailwind.config.js",
  },
  plugins: [
    "@marlonmarcello/snowpack-plugin-pug",
    "@snowpack/plugin-sass",
    "@snowpack/plugin-postcss",
    '@snowpack/plugin-vue'
  ],
  buildOptions: {
    /* ... */
  },
};
