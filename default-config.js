module.exports = function (config) {
  const defaultConfig = {
    swDest: 'sw.js',
    navigateFallback: 'index.html',
    navigateFallbackWhitelist: [/^(?!\/__).*/],
  };
  if (config.cwd) {
    defaultConfig.modifyUrlPrefix = {};
    defaultConfig.modifyUrlPrefix[config.cwd] = '';
  }
  return defaultConfig;
}