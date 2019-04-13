module.exports = function (config, helpers, newPlugin, esmPlugin) {
  const pluginInstances = helpers.getPluginsByName(config, 'SWPrecacheWebpackPlugin') || [];
  pluginInstances.forEach(plugin => {
    if (plugin.index) {
      const index = plugin.index;
      config.plugins.splice(index, 1, newPlugin);
    }
  });
  if (pluginInstances.length === 0) {
    config.plugins.push(newPlugin);
  }
  if (esmPlugin && helpers.getPluginsByName(config, 'BabelEsmPlugin')) {
    config.plugins.push(esmPlugin);
  }
  return config;
}