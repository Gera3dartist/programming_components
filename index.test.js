const Calc = require('./calc.js');
const assert = require('assert');




describe('Testin calc', function() {
    let t = Calc.taylor(1);
    it('should have taylor function defined', function() { assert.equal(typeof Calc.taylor, 'function');});
    // it('should be qual to 10', function() { assert.equal(Calc.taylor(), 10);});

    
})