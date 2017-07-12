/* eslint-env node */
'use strict';

const CommentRedactor = require('./comment-redactor');

module.exports = {
  name: 'htmlbars-comment-redactor',

  setupPreprocessorRegistry(type, registry) {
    registry.add('htmlbars-ast-plugin', {
      name: 'htmlbars-comment-redactor',
      plugin: CommentRedactor,
      baseDir: () => __dirname
    });
  }
};
