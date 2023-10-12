// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// solution

function century(year) {
    return Math.ceil(year / 100);
  }

//test case

const Test = require('@codewars/test-compat');

describe('Basic Tests', function(){
  it('Sample Tests', function(){
    Test.assertEquals(century(1705), 18, 'Testing for year 1705');
    Test.assertEquals(century(1900), 19, 'Testing for year 1900');
    Test.assertEquals(century(1601), 17, 'Testing for year 1601');
    Test.assertEquals(century(2000), 20, 'Testing for year 2000');
    Test.assertEquals(century(89), 1, 'Testing for year 89');
  });

  it('Random Tests', function(){
  
    function gC(y){
      return Math.ceil(y / 100);
    }
  
    for (let i = 0; i < 200; i++){
      let year = Math.ceil(Math.random() * 999999);
      Test.assertEquals(century(year), gC(year), 'Testing for year ' + year);
    }
  });
});