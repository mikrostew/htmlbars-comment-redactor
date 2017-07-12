/* eslint-env node */
'use strict';

class CommentRedactor {
  transform(ast) {
    this.syntax.traverse(ast, {
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
