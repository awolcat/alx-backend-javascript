const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('calculateNumber', function () {
  it('should round off a to the nearest whole number', function () {
    assert.equal(calculateNumber(1.2, 1), 2);
    assert.equal(calculateNumber(1.8, 1), 3);
  });
  it('should round off b to the nearest whole number', function () {
    assert.equal(calculateNumber(1, 1.2), 2);
    assert.equal(calculateNumber(1, 1.8), 3);
  });
});
