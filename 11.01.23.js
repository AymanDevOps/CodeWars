// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.


// solution

function removeChar(str){
    //You got this!
   // Removing the first character
   str = str.slice(1);
   
   // Removing the last character
   str = str.slice(0, str.length - 1);
   return str;
   };
   
   