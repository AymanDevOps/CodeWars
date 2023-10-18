// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// solution


//we created a function to disemvowel strings
function disemvowel(str) {
  
    //we created a varaiable that hold both upper and lower caser vowels
    let vowels = 'aeiouAEIOU'
    
    //we craeted an empty string to hold the final result
    let finalString = ''
    
    //create a for loop that loops through the length of the string
    for (let i = 0; i < str.length; i++){
      
      //checks the inputed string index by index for vowels and if they arent a vowel
          if(!vowels.includes(str[i])){
            
      //the letters that arent vowels will get put into the empty string variable
          finalString += str[i]
      }
    }
    //then we return the final string thats holding all the non vowels
    return finalString
  }
