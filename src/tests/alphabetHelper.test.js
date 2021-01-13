const { assert } = require('chai');
const AlphabetHelper = require('../lexer/alphabetHelper');

describe('test AlphabetHelper', () => {
  it('char&number check', () => {
    assert.equal(true, AlphabetHelper.isLetter('a'));
    assert.equal(false, AlphabetHelper.isLetter('1'));
    assert.equal(true, AlphabetHelper.isNumber('1'));
    assert.equal(true, AlphabetHelper.isOperator('/'));
  });
});
