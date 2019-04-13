const replaceDefaultPlugin = require('./replace-default-plugin');
const {InjectManifest} = require("workbox-webpack-plugin");
const getDefaultConfig = require('./default-config');

module.exports = function(config, helpers, workboxConfig) {
  const defaultConfig = getDefaultConfig(config);
  delete defaultConfig['navigateFallback'];
  delete defaultConfig['navigateFallbackWhitelist'];
  const swGenerator = new InjectManifest(Object.assign({}, defaultConfig, workboxConfig));
  return replaceDefaultPlugin(config, helpers, swGenerator);
}