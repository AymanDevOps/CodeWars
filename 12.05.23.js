// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
// assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
// assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 


//solution

//practice array
let arr = ['5', '0', 9, 3, 2, 1, '9', 6, 7];

//empty array to store values
let numArr = []

//this is just a sum placeholder to add values from the array to
let sum = 0

//stores the length of the array into the variable length
let length = arr.length; 

//for loop to loop through the array
for (let i = 0; i < length; i++){

    //here we take the i element convert it to an integer by parseInt
    // Convert the element to an integer and store it in numArr
    let num = parseInt(arr[i]);

    //then push it to the end of the array
    numArr.push(num); 
}
 
//for loop looping through the new array we created called newArr that is storing all the pushed and parsed integers
for (let i = 0; i < numArr.length; i++){

    //here we add all the integers together
    sum += numArr[i]
}
  
//prints the array of numbers 
console.log(numArr);

//prints the sum
console.log(sum)