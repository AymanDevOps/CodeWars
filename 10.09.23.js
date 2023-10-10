// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

//solution

function areYouPlayingBanjo(name) {
    if ( name[0] === 'R' || name[0] === 'r' ) {
      return `${name} plays banjo`;
    } else {
      return `${name} does not play banjo`;
    }
  }

//test case
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
    assert.strictEqual(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("rolf"), "rolf plays banjo");
    })
  })

describe("Random tests", () => {  
  
  const lst = ["Adam", "Bob", "chelsea", "daniel", "Ethan", "fanny", "george", "harry", 
               "Ignatious", "Kyle", "Lavender", "michelle", "peter", "Ragu", "Ryle", "Reaven", 
               "royce", "richard", "rubi", "Reanor", "resh", "Samantha", "trishan", "valde"]
  
  function randint(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  for(let i = 0; i < 100; i++){
    let word = lst[randint(0, lst.length - 1)]
    let expected = word.toLowerCase()[0] == 'r'? `${word} plays banjo`: `${word} does not play banjo`
    it(`areYouPlayingBanjo(${JSON.stringify(word)}) should equal ${JSON.stringify(expected)}`, () => {
      assert.strictEqual(areYouPlayingBanjo(word), expected);
    });
  }
})