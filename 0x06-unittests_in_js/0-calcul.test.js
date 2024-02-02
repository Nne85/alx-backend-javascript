// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should round and sum two integers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round and sum an integer and a float', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should round and sum two floats', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should round and sum two floats with decimals', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should round a floats to nearest decimal place', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should round b floats to nearest decimal place', () => {
    assert.strictEqual(calculateNumber(1.7, 3.3), 5);
  });

  it('should round floats with multiple decimal place', () => {
  assert.strictEqual(calculateNumber(2.522222, 3.72222), 7);
  });

});
