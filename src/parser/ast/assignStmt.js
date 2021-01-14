const Stmt = require('./stmt');
const ASTNodeTypes = require('../ASTNodeTypes');

class AssignStmt extends Stmt {
  constructor(parent) {
    super(parent, ASTNodeTypes.ASSIGN_STMT, 'assign');
  }
}

module.exports = AssignStmt;
