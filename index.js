'use strict';

var log                       = require('./lib/log');
var transportConsole          = require('./lib/transports/console');
var transportFile             = require('./lib/transports/file');
var transportRemote           = require('./lib/transports/remote');
var transportMainConsole      = require('./lib/transports/mainConsole');
var transportRendererConsole  = require('./lib/transports/rendererConsole');
var utils                     = require('./lib/utils');

module.exports = {
  hooks: [],
  isDev: utils.isDev(),
  levels: ['error', 'warn', 'info', 'verbose', 'debug', 'silly'],
  variables: {
    processType: process.type
  }
};

module.exports.transports = {
  console: transportConsole(module.exports),
  file: transportFile(module.exports),
  remote: transportRemote(module.exports),
  mainConsole: transportMainConsole(module.exports),
  rendererConsole: transportRendererConsole(module.exports)
};

module.exports.levels.forEach(function (level) {
  module.exports[level] = log.bind(null, module.exports, level);
});

module.exports.default = module.exports;
