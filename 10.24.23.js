// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// solution

function positiveSum(arr) {
    //here we create a variable sum and give it 0 so that we could put the result in
    let sum = 0
    //we then create a for loop to go through the array 
    for (i = 0; i < arr.length; i++){
      //this checks if the number at that specific index is a positive number hence greater than 0
      if (arr[i] > 0){
        //if positive we add it to the sum variable then go through the array again
        sum += arr[i]
      }
    }
    //we then return the sum of all positive numbers added up
    return sum
  }