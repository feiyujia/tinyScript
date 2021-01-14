class ASTNode {
  constructor(_parent, _type = null, _label = null) {
    // 树结构
    this.children = [];
    this._parent = _parent;

    // 关键信息
    this.lexeme = null;
    this.type = _type;
    this.label = _label;
  }

  // 封装内部结构，避免后期受限于 children 只能是数组的数据结构
  getChild(index) {
    return this.children[index];
  }

  addChild(node) {
    this.children.push(node);
  }

  getLexeme() {
    return this.lexeme;
  }

  // 待优化，危险 API 操作
  getChildren() {
    return this.children;
  }
}

module.exports = ASTNode;
