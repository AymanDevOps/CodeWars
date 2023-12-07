// Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// solve([[1,2],[4],[5,6]]),4)
// solve([[1,2],[4,4],[5,6,6]]),4)
// solve([[1,2],[3,4],[5,6]]),8)
// solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)


//here we declared the function solve that takes in arr as an argument
function solve(arr) {

    //Return the result of consecutively applying a function to each subarray in arr, where this function updates and returns a running total 
    return arr.reduce((total, subArray) => {

        //here we create a Set to remove duplicates, then get its size
        //a Set is a collection of unique elements
        const uniqueElements = new Set(subArray).size;


        //here we multiply the current running total with the number of unique elements in the current subarray
        return total * uniqueElements;

    }, 1); //start multiplying from 1
}

//test cases
console.log(solve([[1, 2], [4], [5, 6]])); // Should return 4
console.log(solve([[1, 2], [4, 4], [5, 6, 6]])); // Should return 4
console.log(solve([[1, 2], [3, 4], [5, 6]])); // Should return 8
console.log(solve([[1, 2, 3], [3, 4, 6, 6, 7], [8, 9, 10, 12, 5, 6]]));