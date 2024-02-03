// 2-calcul_chai.test.js
const chai = require("chai");
const calculateNumber = require('./2-calcul_chai.js');

const expect = chai.expect;

describe('calculateNumber', () => {
  describe('type is SUM', () => {
    it('should round and add two numbers', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('type is SUBTRACT', () => {
    it('should round and subtract b from a', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('type is DIVIDE', () => {
    it('should round and divide a by b', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" if b is rounded to 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return "Error" if a is rounded to 0', () => {
      expect(calculateNumber('DIVIDE', 0, 1.4)).to.equal('Error');
    });
  });
});
