const Stmt = require('./stmt');
const ASTNodeTypes = require('./ASTNodeTypes');

class ForStmt extends Stmt {
  constructor(parent) {
    super(parent, ASTNodeTypes.FOR_STMT, 'for');
  }
}

module.exports = ForStmt;
