
const sharp = require('sharp');
sharp.cache(false);
sharp.simd(false);
// exports.onCreateBabelConfig = ({ actions: { setBabelPlugin } }) => {
//   setBabelPlugin({ name: 'babel-plugin-tailwind' });
//   setBabelPlugin({ name: 'babel-plugin-emotion' });
// };
// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage, deletePage } = actions;
  
//   // Look for /404/ path
//   if (page.path.match(/^\/404\/$/)) {
//     const oldPage = { ...page };
    
//     // Add page context
//     page.context = {
//       foo: 'bar'
//     };
    
//     // Recreate the modified page
//     deletePage(oldPage);
//     createPage(page)
//   }
// };

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