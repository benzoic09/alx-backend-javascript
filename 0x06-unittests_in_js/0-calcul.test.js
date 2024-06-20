const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function(){
    it('should return 4 when inputs are 1 and 3', function(){
        assert.strictEqual(calculateNumber(1, 3), 4);
    })

    it('should return 5 when inputs are 1.4 and 3.6', function() {
    assert.strictEqual(calculateNumber(1.4, 3.6), 5);
  });

  it('should return 6 when inputs are 1.5 and 4.5', function() {
    assert.strictEqual(calculateNumber(1.5, 4.5), 6);
  });

  it('should return 6 when inputs are 1.4 and 4.6', function() {
    assert.strictEqual(calculateNumber(1.4, 4.6), 6);
  });
  
});