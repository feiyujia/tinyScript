const Factor = require('./factor');
const ASTNodeTypes = require('./ASTNodeTypes');

class Scalar extends Factor {
  constructor(parent, it) {
    super(parent, it);
  }
}

module.exports = Scalar;
