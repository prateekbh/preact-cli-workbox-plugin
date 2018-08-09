module.exports = function (config) {
  const defaultConfig = {
    swDest: 'sw.js',
    navigateFallback: 'index.html',
    navigateFallbackWhitelist: [/^(?!\/__).*/],
    include: [/\.html$/, /(\.[\w]{5}\.js)$/, /\.css$/, /\.png$/],
  };
  if (config.cwd) {
    defaultConfig.modifyUrlPrefix = {};
    defaultConfig.modifyUrlPrefix[config.cwd] = '';
  }
  return defaultConfig;
}