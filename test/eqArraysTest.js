const { assert } = require('chai');
const eqArrays = require('../eqArrays')



describe("#eqArrays", () => {
  it("returns assertion pass when comparing ['1', '2', '3'] and ['1', '2', '3']", () => {
   let result = eqArrays(['1', '2', '3'],['1', '2', '3'])
    assert.deepEqual(result, true);
  });
});



