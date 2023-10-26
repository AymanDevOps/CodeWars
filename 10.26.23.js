// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

// solution

function points(games) {
  
    //we created a variable to hold points
     let points = 0
     
     //this uses the forEach method to iterate through the games array by each 'match'
      games.forEach(match => {
        
        //here we created two vaiables x, y 
        //then we use the split method on each match to split it into two by the : 
        //and then we used the .map method to turn every string into a number
        const [x, y] = match.split(':').map(Number);
       
       //here we check if x is greater than y
         if (x > y){
           //if so add 3
           points += 3
           //here we check if x is the same as y
         } else if (x === y){
           //we add one
           points += 1
         } 
  
     });
    //then we return all the points
    return points
  }