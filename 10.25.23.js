// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// solution

function countPositivesSumNegatives(input) {
  
    // so we need to return how many positive numbers there are
    // and the sum of all the negative numbers
    
    // checks if input is not provided or is an empty array
    if (!input || input.length === 0) return []; 
    
    // then ill create two vaiables to hold each answer one for sum and one for count
    let sum = 0
    let count = 0
    
    // i then create a for loop to iterate through the array
    for (i = 0; i < input.length; i++){
      
      //my first if statement checks if the index we are at is positive 
      if (input[i] > 0){
        //if it is we add one to the count variable
        count += 1
        //if not we check if the index is negative
      } else if (input[i] < 0){ 
        //if it is we add the index vaule to the sum
        sum += input[i]
       }
     }
    //then we return both
    return [count, sum]
  }