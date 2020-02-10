const assert = require('chai').assert
const tail = require('../tail')

describe("#tail", () => {
  it("returns Lighthouse for ['Hello', 'Lighthouse']", () => {
    let result = tail(["Hello", "Lighthouse"])
    assert.strictEqual(result[0],"Lighthouse");
  });


//   it("returns '5' for ['5']", () => {
//     assert.strictEqual(head(['5']), '6'); 
//   });

});




// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"