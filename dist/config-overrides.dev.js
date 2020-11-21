"use strict";

var ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = function override(config, env) {
  config.resolve.plugins = config.resolve.plugins.filter(function (plugin) {
    return !(plugin instanceof ModuleScopePlugin);
  });
  return config;
};