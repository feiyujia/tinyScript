const { assert } = require('chai');
const Token = require('../lexer/token');
const arrayToGenerator = require('../common/arrayToGenerator');
const PeekIterator = require('../common/peekIterator');
const TokenType = require('../lexer/tokenType');

describe('test Token', () => {
  const assertToken = (token, value, type) => {
    assert.equal(token.getValue(), value);
    assert.equal(token.getType(), type);
  };

  it('test varOrKeyword', () => {
    var it1 = new PeekIterator(arrayToGenerator([...'if abc']));
    console.log('render', arrayToGenerator([...'if abc']));
    var it2 = new PeekIterator(arrayToGenerator([...'true abc']));

    var token1 = Token.makeVarOrKeyword(it1);
    var token2 = Token.makeVarOrKeyword(it2);
    it1.next();
    var token3 = Token.makeVarOrKeyword(it1);

    assertToken(token1, 'if', TokenType.KEYWORD);
    assertToken(token2, 'true', TokenType.BOOLEAN);
    assertToken(token3, 'abc', TokenType.VARIABLE);
  });

  it('test makeString', () => {
    const tests = ["'123'", '"321"'];

    for (let test of tests) {
      const it = new PeekIterator(arrayToGenerator([...test]));
      const token = Token.makeString(it);
      assertToken(token, test, TokenType.STRING);
    }
  });

  it('test makeOp', () => {
    const tests = [
      ['+ xxx', '+'],
      ['++mmm', '++'],
      ['/=g', '/='],
      ['==1', '=='],
      ['&=3982', '&='],
      ['&777', '&'],
      ['||xx', '||'],
      ['^=111', '^='],
      ['%7', '%'],
    ];

    for (let test of tests) {
      const [input, expected] = test;
      const it = new PeekIterator(arrayToGenerator([...input]));
      const token = Token.makeOp(it);
      assertToken(token, expected, TokenType.OPERATOR);
    }
  });

  it("test makeNumber", () => {
    const tests = [
        "+0 aa",
        "-0 bbb",
        ".3 ccc",
        ".5555 ddd",
        "7899.999 aaa",
        "-100 ggg",
        "-1000.5345345*123123",
        "012 aaa"
    ]

    for(let test of tests) {
        const it = new PeekIterator(arrayToGenerator([...test]))
        const token = Token.makeNumber(it)
        const [expected] = test.split(/[ *]/);
        const type = test.indexOf('.') == -1 ? TokenType.INTEGER : TokenType.FLOAT
        assertToken(token, expected, type)
    }


})
});
