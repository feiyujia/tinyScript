const PeekIterator = require('../common/peekIterator');
const AlphabetHelper = require('./alphabetHelper');
const LexicalException = require('./lexicalException');
const Token = require('./token');
const TokenType = require('./tokenType');

class Lexer {
  analyse(source) {
    const tokens = [];
    const it = new PeekIterator(source, '\0');
    while (it.hasNext()) {
      const c = it.next();

      if (c === '\0') {
        break;
      }
      let lookahead = it.peek();

      if ([' ', '\n'].includes(c)) {
        continue;
      }

      // 提取注释的程序

      if (['{', '}', '(', ')'].includes(c)) {
        tokens.push(new Token(TokenType.BRACKET, c));
        continue;
      }

      if (["'", '"'].includes(c)) {
        // 之前已经 next 了，需要放回去
        it.putBack();
        tokens.push(Token.makeString(it));
        continue;
      }

      if (AlphabetHelper.isLetter(c)) {
        it.putBack();
        tokens.push(Token.makeVarOrKeyword(it));
        continue;
      }

      if (AlphabetHelper.isNumber(c)) {
        it.putBack();
        tokens.push(Token.makeNumber(it));
        continue;
      }

      // + -
      if (['+', '-'].includes(c) && AlphabetHelper.isNumber(lookahead)) {
        // 跳过:a+1, 1+1
        // +5, 3*-5
        const lastToken = tokens[tokens.length - 1] || null;

        if (lastToken == null || !lastToken.isValue()) {
          it.putBack();
          tokens.push(Token.makeNumber(it));
          continue;
        }
      }

      if (AlphabetHelper.isOperator(c)) {
        it.putBack();
        tokens.push(Token.makeOp(it));
        continue;
      }

      throw new LexicalException.fromChar(c);
    }

    return tokens;
  }
}

module.exports = Lexer;
