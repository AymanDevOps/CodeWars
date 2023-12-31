/*   Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
Note: In COBOL, it should return "found the needle at position 6 */

//solution

function findNeedle(haystack) {
    for(let i = 0; i < haystack.length; i++) {
      if(haystack[i] === 'needle') return `found the needle at position ${i}`;
    }
  }

//unit test

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
let haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
let haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
let haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];

Test.assertEquals(findNeedle(haystack_1), 'found the needle at position 3')
Test.assertEquals(findNeedle(haystack_2), 'found the needle at position 5') 
Test.assertEquals(findNeedle(haystack_3), 'found the needle at position 30')

for (let i = 0; i < 25; i++) {
	let junk = [];
   let randomIndex = Math.floor(Math.random() * 25);
   for (let j = 0; j < 25; j++) {
      let random = Math.round(Math.random() * 300 + 1);
		if (j === randomIndex) junk[j] = 'needle'
		else junk[j] = random;
   }
   Test.assertEquals(findNeedle(junk), 'found the needle at position ' + randomIndex, 'try again, didn\'t find the needle in the right place');
}
  });
});