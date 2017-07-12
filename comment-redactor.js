/* eslint-env node */
'use strict';

class CommentRedactor {
  transform(ast) {
    let traverse;

    if (this.syntax && this.syntax.traverse) {
      // glimmer
      traverse = this.syntax.traverse;
    }
    else {
      traverse = require('htmlbars/dist/cjs/htmlbars-syntax').traverse;
    }

    traverse(ast, {
      CommentStatement: {
        enter(node) {
          // overwrite whatever is in the comment
          node.value = '[REDACTED]';
          return node;
        }
      }
    });

    return ast;
  };
}

module.exports = CommentRedactor;
