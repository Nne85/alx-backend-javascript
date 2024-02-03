const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('type is SUM', () => {
    it('should round and add two numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('type is SUBTRACT', () => {
    it('should round and subtract b from a', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('type is DIVIDE', () => {
    it('should round and divide a by b', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" if b is rounded to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return "Error" if a is rounded to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 1.4), 'Error');
    });
  });

});
