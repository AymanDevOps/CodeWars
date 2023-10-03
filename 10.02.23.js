// Note: This kata is inspired by Convert a Number to a String!. Try that one too.

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

//solution

const stringToNumber = function(str){
    // put your code here
    return Number(str)
  }

//unit test

const Test = require('@codewars/test-compat');

describe( "stringToNumber", function(){
  it( "should work for the examples" , function(){
    Test.assertEquals(stringToNumber("1234"),1234)
    Test.assertEquals(stringToNumber("605"), 605)
    Test.assertEquals(stringToNumber("1405"),1405)
    Test.assertEquals(stringToNumber("-7"),  -7)
  });
  it("should work for random strings", function(){
    var i, t;
    for(i = 0; i < 100; ++i){
      t = Math.round(Math.random() * 1e6 - 5e5);
      Test.assertEquals(stringToNumber(t.toString(10)), t);
    }
  });
});