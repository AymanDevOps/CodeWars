// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

//solution

//change numbers to strings 
//split the string
//convert back to num 
//for each num in array square root

function squareDigits(num){
    num = num.toString().split("").map(Number).map((num) => num * num).join("")
    return Number(num);
  }
  
  //9119 user input
  
  //"9119" num.toString()
  
  //["9", "1", "1", "9"] .split("")
  
  //[9, 1, 1, 9] .map(Number)
  
  //[81, 1, 1, 81] .map((num) => num * num)
  
  //"811181" .join("")
  
  //811181   return Number(num);

//test case

const { assert } = require("chai")

describe("Basic tests", () => {
  
  it("squareDigits(3212) should equal 9414", () => {
    assert.strictEqual(squareDigits(3212), 9414);
  });

  it("squareDigits(2112) should equal 4114", () => {
    assert.strictEqual(squareDigits(2112), 4114);
  });

  it("squareDigits(0) should equal 0", () => {
    assert.strictEqual(squareDigits(0), 0);
  });
});


describe("Random tests", () => {  
  
  function randint(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  for(let i = 1; i <= 100; i++){
    let num = randint(1, 10_000_000)
    let expected = +[...(''+num)].map(x => Math.pow(+x, 2)).join``
    it(`squareDigits(${num}) should equal ${expected}`, () => {
      assert.strictEqual(squareDigits(num), expected);
    });
  }
})