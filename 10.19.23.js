// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// solution


var isSquare = function(n){
  
    //first we check if the number can be positive since square numbers cant be negative
  if (n < 0){
    //if so we return false and stop if true we move on with the function
    return false;
  }
  
  //here we get the square root of whatever n is. Then we check if that answer is an integer.
  if(Number.isInteger(Math.sqrt(n))){
    //if the returned value is a whole number we return true
    return true;
  }else{
    //if not we return false
    return false;
  }
}