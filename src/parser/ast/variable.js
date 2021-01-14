const Factor = require('./factor');
const ASTNodeTypes = require('./ASTNodeTypes');

class Variable extends Factor {
  constructor(parent,it) {
    super(parent, it);
  }
}

module.exports = Variable;
