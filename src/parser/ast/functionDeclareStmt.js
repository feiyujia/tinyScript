const Stmt = require('./stmt');
const ASTNodeTypes = require('./ASTNodeTypes');

class FunctionDeclareStmt extends Stmt {
  constructor(parent) {
    super(parent, ASTNodeTypes.FUNCTION_DECLARE_STMT, 'functionDeclare');
  }
}

module.exports = FunctionDeclareStmt;
