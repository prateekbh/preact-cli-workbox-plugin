const replaceDefaultPugin = require('./replace-default-plugin');
const {InjectManifest} = require("workbox-webpack-plugin");
const getDefaultConfig = require('./default-config');

module.exports = function(config, helpers, workboxConfig) {
  const defaultConfig = getDefaultConfig(config);
  const swGenerator = new InjectManifest(Object.assign({}, defaultConfig, workboxConfig));
  return replaceDefaultPugin(config, helpers, swGenerator);
}