
const nodeExternals=require('webpack-node-externals');
const { root } = require('./helpers');
/**
 * This is a server config which should be merged on top of common config
 */
module.exports = {
  entry: root('./index.ts'),
  output: {
    filename:'server.js'
  },
  target: 'node'
};
