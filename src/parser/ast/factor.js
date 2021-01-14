const ASTNode = require('./ASTNode');
const TokenType = require('../../lexer/tokenType');
const ASTNodeTypes = require('../ast/ASTNodeTypes');

class Factor extends ASTNode {
  constructor(parent, it) {
    super(parent);
    const token = it.next();
    const type = token.getType();

    if (type === TokenType.VARIABLE) {
      this.type = ASTNodeTypes.VARIABLE;
    } else {
      this.type = ASTNodeTypes.SCALAR;
    }

    this.label = token.getValue();
    this.lexeme = token;
  }
}

module.exports = Factor;
