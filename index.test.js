const Calc = require('./calc.js');
const assert = require('assert');


let t = Calc.taylor(1);

assert.equal(t, 10);