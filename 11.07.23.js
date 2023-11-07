// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// solution

const abbrevName = name =>
  //first we change the name to uppercase
  //then we split the string by the space between first and last name and this also creates an array
  //then we use the map function to just return us the element at index 0 which would be the first initial of both first and last name
  //then we join them together with a period separating them
  name.toUpperCase().split(' ').map(element => element[0]).join('.')