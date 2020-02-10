const { assert } = require('chai');
const eqArrays = require('../eqArrays')



describe("assertArraysEqual", () => {
  it("returns assertion pass when comparing the two arrays ['1', '2', '3'] and ['1', '2', '3']", () => {
    assert.deepEqual(['1', '2', '3'],['1', '2', '3']);
  });
});





// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);