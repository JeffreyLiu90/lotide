const { assert } = require('chai');
const middle = require('../middle')

describe("#middle", () => {
  it("returns ['3', '4'] for ['1', '2', '3', '4', '5', '6']", () => {
    let result = middle(["1", "2", "3", "4", "5", "6"])
    assert.deepEqual(result, ['3', '4']);
  });
});

// assertArraysEqual(middle(["1", "2", "3", "4", "5", "6"]), ["3", "4"]);

