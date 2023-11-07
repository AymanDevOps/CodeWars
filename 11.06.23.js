// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// solution

function stringToArray(string){
    //i created a new variable to hold the new string array
    //then i used the split function and split each word by a space which also created an array
    let newString = string.split(" ")
    //then i returned the string
    return newString
  }