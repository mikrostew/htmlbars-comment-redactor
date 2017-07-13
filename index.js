/* eslint-env node */
'use strict';

const CommentRedactor = require('./comment-redactor');

module.exports = {
  name: 'htmlbars-comment-redactor',

  setupPreprocessorRegistry(type, registry) {
    const pluginInfo = this.buildPluginInfo();
    // for parallel transpile - if this isn't known, it can be ignored and the plugin will work as usual
    pluginInfo.parallelBabel = {
      requireFile: __dirname,
      buildUsing: 'buildPluginInfo',
      params: {}
    };

    registry.add('htmlbars-ast-plugin', pluginInfo);
  },

  buildPluginInfo() {
    return {
      name: 'htmlbars-comment-redactor',
      plugin: CommentRedactor,
      baseDir: () => __dirname
    };
  }
};
