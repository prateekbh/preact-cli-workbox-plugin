module.exports = function (config) {
  const defaultConfig = {
    swDest: 'sw.js',
    navigateFallback: 'index.html',
    navigateFallbackWhitelist: [/^(?!\/__).*/],
    modifyUrlPrefix: {}
  };
  if (config.cwd) {
    defaultConfig.modifyUrlPrefix[config.cwd] = '';
  }
  return defaultConfig;
}