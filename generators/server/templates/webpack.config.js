const webpackMerge = require('webpack-merge');
const commonPartial = require('./config/webpack/webpack.common');
const serverPartial = require('./config/webpack/webpack.server');
const nodeExternals = require('webpack-node-externals');

module.exports = function (op) {

  const serverConfig = webpackMerge({}, commonPartial, serverPartial, {
    entry: serverPartial.entry, // Temporary
    plugins: [
    ],
    externals: [nodeExternals({
      modulesFromFile: true
    })],
    mode:op.mode?op.mode:'development'
  });


  const configs = [];
    configs.push(serverConfig);


  return configs;
}
