// Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// employed | vacation 
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false

// solution

function setAlarm(employed, vacation){
    //so first we should use an if else statement because this looks like a truth table
    // we would use an if else statement to put the conditions 
    //since only one is true we just need to check that one condition and if its not met everything else is false 
    if (employed === true && vacation === false){
      return true
    } else {
      return false
    }
  
  }