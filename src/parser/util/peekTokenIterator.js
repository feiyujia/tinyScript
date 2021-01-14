const PeekIterator = require('../../common/peekIterator');
const ParseException = require('./parseException');

class PeekTokenIterator extends PeekIterator {
  constructor(it) {
    super(it);
  }

  nextMatch(value) {
    const token = this.next();
    // 拿到下一个值并匹配
    if (token.getValue() !== value) {
      throw ParseException.fromToken(token);
    }
    return token;
  }

  nextMatch1(type) {
    const token = this.next();
    if (token.getType() !== type) {
      throw ParseException.fromToken(token);
    }
    return token;
  }
}

module.exports = PeekTokenIterator;
