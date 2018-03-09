module.exports = function (config, helpers, newPlugin) {
  const pluginInstances = helpers.getPluginsByName(config, 'SWPrecacheWebpackPlugin') || [];
  pluginInstances.forEach(plugin => {
    if (plugin.index) {
      const index = plugin.index;
      console.log('index', index);
      config.plugins.splice(index, 1, newPlugin);
    }
  });
  return config;
}