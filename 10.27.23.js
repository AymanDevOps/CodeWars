// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

// solution

function countBy(x, n) {
  
    //here we create an empty array that will hold the multiples of x 
    let z = [];
    
    //here we have a loop that runs n times
    for (let i = 1; i <= n; i++){
      
      //this multiples the current number of i by x and then pushes it into the z array
      z.push(x * i)
    }
    //finally we return z
    return z;
  }