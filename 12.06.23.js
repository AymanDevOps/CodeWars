// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
// last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
// last('take me to semynak'), ['take', 'me', 'semynak', 'to'] 

function last(x) {
    //split the string into an array of words
    let words = x.split(' ');

    // Sort the array of words
    let sortedWords = words.sort(function(a, b) {
        if (a[a.length - 1] > b[b.length - 1])
        //if a is greater than b it assigns 1 
            return 1;
        else if (a[a.length - 1] < b[b.length - 1])
        //if a is less than b it assigns -1
            return -1;
            //if last are same assigns 0
        return 0;
    });

    //return the sorted array of words
    return sortedWords;
}

console.log(last('man i need a taxi up to ubud'));
console.log(last('what time are we climbing up the volcano'));
console.log(last('take me to semynak'));

