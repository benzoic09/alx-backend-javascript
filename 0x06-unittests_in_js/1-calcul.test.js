const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('sUM', () => {
    it('should return 4 when inputs are 1 and 3', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('should return 5 when inputs are 1.4 and 3.6', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 3.6), 5);
    });

    it('should return 7 when inputs are 1.5 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.5, 4.5), 7);
    });
  });

  describe('sUBTRACT', () => {
    it('should return -2 when inputs are 1 and 3', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
    });

    it('should return -3 when inputs are 1.4 and 4.6', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.6), -4);
    });

    it('should return -3 when inputs are 1.5 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 4.5), -3);
    });
  });

  describe('dIVIDE', () => {
    it('should return 0.25 when inputs are 1 and 4', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 4), 0.25);
    });

    it('should return 0.2 when inputs are 1.4 and 4.6', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.6), 0.2);
    });

    it('should return "Error" when inputs are 1.4 and 0.4', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
    });

    it('should return 1 when inputs are 4.5 and 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4.5, 4.5), 1);
    });
  });

  describe('invalid operation type', () => {
    it('should throw an error when the type is not SUM, SUBTRACT, or DIVIDE', () => {
      assert.throws(() => calculateNumber('MULTIPLY', 1, 3), /Invalid operation type/);
    });
  });
});
