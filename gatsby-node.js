
const sharp = require('sharp');
sharp.cache(false);
sharp.simd(false);

exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  actions.setWebpackConfig({
   resolve: {
        alias: {
          process: 'process/browser',
          stream: "stream-browserify",
          zlib: "browserify-zlib"
      },
      fallback: {
        stream: require.resolve("stream-browserify"),
        zlib: require.resolve("browserify-zlib"),
        util:  require.resolve("util/"),
        assert:  require.resolve("assert/"),
      },
    },
    plugins: [plugins.provide({ 
      Buffer: ['buffer/', 'Buffer'] ,
      process: 'process/browser',
    })]
  })
}