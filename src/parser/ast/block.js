const Stmt = require('../stmt');
const ASTNodeTypes = require('./ASTNodeTypes');

class Block extends Stmt {
  constructor(parent) {
    super(parent, ASTNodeTypes.BLOCK, 'block');
  }
}

module.exports = Block;
