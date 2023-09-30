// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

//solution

// Sum Numbers
function sum (numbers) {
    "use strict";
  if (numbers.length === 0) return 0;
  return numbers.reduce((total, currentValue) => total + currentValue);
    
};

//unit test

const Test = require('@codewars/test-compat');

describe("sum", function() {
    it ("The method sum should be defined.", function () {
        Test.expect(sum, "The method sum is not defined.")
    });
    
    it ("Empty array should yield 0.", function () {
        Test.assertEquals(sum([]), 0)
    });
    
    it ("One number in array should be that number.", function () {
        for (let i = 0; i < 5; i++) {
            r = Test.randomNumber()
            Test.assertEquals(sum([r]), r)
        }
        Test.assertEquals(sum([5]), 5)
        Test.assertEquals(sum([1251]), 1251)
    });
    
    it ("One negative number in array should be that number.", function () {
        for (let i = 0; i < 5; i++) {
            r = -1*Test.randomNumber()
            Test.assertEquals(sum([r]), r)
        }
        Test.assertEquals(sum([-1]), -1)
        Test.assertEquals(sum([-521]), -521)
    });
    
    it ("Multiple numbers should sum to correct total.", function () {
        total = 0
        array = []
        for (let i = 0; i < 10; i++) {
          t = Test.randomNumber()
          array.push(t)
          total += t
        }
        Test.assertEquals(sum(array), total)
        Test.assertEquals(sum([1, 5.2, 4, 0]), 10.2)
    });
    
    it ("Multiple numbers with negatives should sum to correct total.", function () {
        total = 0
        array = []
        for (let i = 0; i < 10; i++) { // Positive numbers
          t = Test.randomNumber()
          array.push(t)
          total += t
        }
        for (let i = 0; i < 10; i++) { // Negative numbers
          t = -1*Test.randomNumber()
          array.push(t)
          total += t
        }
        Test.assertEquals(sum(array), total)
        Test.assertEquals(sum([1, 5.2, 4, 0, -1]), 9.2)
    });
});