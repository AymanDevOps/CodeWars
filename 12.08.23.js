// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// Hint: map through array checking if indexof == lastindexof and return the appropriate character


function changeDup(str) {
    return str.toLowerCase()
      .split('')
      .map((c, i, a) => a.indexOf(c) === a.lastIndexOf(c) ? '(' : ')')
      .join('')
  }