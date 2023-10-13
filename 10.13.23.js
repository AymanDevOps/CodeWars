// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// solution

function numberToString(num) {
    // Return a string of the number here!
    let str = num.toString();
    return str;
  }

// function numberToString(num){
//     return num.toString();
// }



//test case

const assert = require('chai').assert;
describe("Tests", () => {
  it("fixed tests", () => {
    assert.strictEqual(numberToString(67), '67');
    assert.strictEqual(numberToString(79585), '79585');
    assert.notStrictEqual(numberToString(79585), 79585);
    assert.strictEqual(numberToString(1+2), '3');
    assert.strictEqual(numberToString(1-2), '-1');
  });
  
  it("random tests", () => {
    for (let run = 0; run < 200; ++run) {
      let num = Math.floor(Math.random() * 2000000 - 1000000);
      assert.strictEqual(numberToString(num), String(num), `Testing for num = ${num}`);
    }
  });
});