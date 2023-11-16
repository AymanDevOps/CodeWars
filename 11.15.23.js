// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

// solution

function doubleChar(str) {
    // Your code here
    
    //we create an empty variable to holdthe new doubled string
    let doubledChar = ""
    
    //we then create a for loop to loop through each index of the string
    for (let i = 0; i < str.length; i++){
      //we then add two characters at the same index twice and into the new double char variable
      doubledChar += str[i] + str[i]
    }
    return doubledChar
  }