const Expr = require('./ast/expr');
const Scalar = require('./ast/scalar');
const ASTNodeTypes = require('./ast/ASTNodeTypes');

class SimpleParse {
  // Expr -> digit + Expr | digit 避免递归树时候死循环
  // digit -> 0 ~ 9
  static parse(it) {
    const expr = new Expr(null);
    const scalar = new Scalar(expr, it);
    // 递归，构建树
    if (!it.hasNext()) {
      return scalar;
    }

    expr.addChild(scalar);
    const op = it.nextMatch('+');
    expr.label = '+';
    expr.type = ASTNodeTypes.BINARY_EXPR;
    expr.lexeme = op;
    expr.addChild(SimpleParse.parse(it));

    return expr;
  }
}

module.exports = SimpleParse;
