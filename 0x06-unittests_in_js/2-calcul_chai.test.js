const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 4 when inputs are 1 and 3', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('should return 5 when inputs are 1.4 and 3.6', () => {
      expect(calculateNumber('SUM', 1.4, 3.6)).to.equal(5);
    });

    it('should return 7 when inputs are 1.5 and 4.5', () => {
      expect(calculateNumber('SUM', 1.5, 4.5)).to.equal(7);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -2 when inputs are 1 and 3', () => {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });

    it('should return -3 when inputs are 1.4 and 4.6', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.6)).to.equal(-4);
    });

    it('should return -3 when inputs are 1.5 and 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.5, 4.5)).to.equal(-3);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.25 when inputs are 1 and 4', () => {
      expect(calculateNumber('DIVIDE', 1, 4)).to.equal(0.25);
    });

    it('should return 0.2 when inputs are 1.4 and 4.6', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.6)).to.equal(0.2);
    });

    it('should return "Error" when inputs are 1.4 and 0.4', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.equal('Error');
    });

    it('should return 1 when inputs are 4.5 and 4.5', () => {
      expect(calculateNumber('DIVIDE', 4.5, 4.5)).to.equal(1);
    });
  });

  describe('Invalid operation type', () => {
    it('should throw an error when the type is not SUM, SUBTRACT, or DIVIDE', () => {
      expect(() => calculateNumber('MULTIPLY', 1, 3)).to.throw('Invalid operation type');
    });
  });
});
