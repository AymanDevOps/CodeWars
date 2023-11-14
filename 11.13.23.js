// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// solution

function digitize(n) {
    // convert the number to a string, split it into an array of characters,
    // reverse the array, and then convert each character back to a number.
    return n.toString().split("").reverse().map(num => parseInt(num));
  }