// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// solution

class SmallestIntegerFinder {

    //this function is findSmallestInt and takes one parameter arg

    findSmallestInt(args) {

      //this returns the smallest integer 
      //Math.min() is a javascript method that returns the smallest integer
      //...args creates numbers from the array since Math.min() doesnt accept an array
      
      return Math.min(...args)
    }
  }
  