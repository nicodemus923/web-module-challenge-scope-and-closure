// ⭐️ Example Challenge START ⭐️

/**Example Task : processFirstItem()
 * This example shows how you might go about solving the rest of the tasks
 * 
 * Use the higher order function processFirstItem below to do the following:
 *  1. Receive an array of strings in a parameter
 *  2. Receive a callback function that takes a string as its argument in a parameter
 *  3. Return the result of invoking the callback function and passing in the FIRST 
 *     element in the array as the argument
 * 
 * The following code is demonstrating a way of completing this task
 * It returns the string `foofoo`
*/

function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}
console.log(processFirstItem(['foo','bar'],function(str){return str+str}));

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/*Task 1: counterMaker()
  
  Study the code for counter1 and counter2, then answer the questions below.
  
  1. What is the difference between counter1 and counter2?
    //counter 2 is a simple function that does a single calculation and, once it's run, it's done and there's
      no child element or, for that matter, no parent either. 
    //counter one is two functions in which the child function runs and pushes results to the parent. 
  
  2. Which of the two uses a closure? How can you tell?

    //counter 1 uses scope because it combines functions. There's a parent function and a child
      function where the child function reaches out to the parent function for its value/function. 
  
  3. In what scenario would the counter1 code be preferable? In what scenario would 
     counter2 be better?  
     //counter1 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {   //
   return count++;
  }
}
console.log(counterMaker());

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}
console.log(counter2());

/* Task 2: inning() 
Use the inning function below to do the following:
  1. Return a random whole number of points between 0 and 2 scored by one team in an inning
  
  NOTE: You will be using this function over and over again in the tasks below
  For example: invoking inning() should return a numerical score value of 0, 1, or 2
*/
//TASK 2:

function inning(){
  return Math.floor(Math.random()*Math.floor(3));
}
console.log(inning());

function finalScore(inningCB){     //how does callback value know to reference inning
  return {                                  
    Home: inningCB(),
    Away: inningCB()
    
  }
}
console.log(finalScore(inning)); 
     

function endScore(inningCB, gameCB){        //runs for home and away for each iteration. 
  const totalGame = [];                     //CREATE EMPTY ARRAY
  let homeScore = 0
  let awayScore = 0
  
  for(let i = 0; i < 9; i++){
  const currentScore = gameCB(inningCB)
  homeScore = homeScore + currentScore.Home       
  awayScore = awayScore + currentScore.Away
  totalGame.push(`Inning ${i + 1}: Away ${currentScore.Away} - Home ${currentScore.Home}`)
}
  return totalGame;

}

 console.log(endScore(inning, finalScore));

// console.log(finalScore.prototype.concat);   //<---WHY DOESN'T endScore, finalScore NOT HAVE A VALUE YET? I KNOW IT'S TO DO WITH SCOPING BUT NOT SURE WHY THEY'RE STILL UNDEFINED.



//-------------QUESTIONS--------------------
// How can I combine finalScore function with endScore function so that the score for each team is then combined and prints as an object? 

//best way to combine the elements in the new array? Tried array.prototype methods.

//why do I put "9" in my for loop for counting the innings but "3" in my random # generator inning()? for loop starts count at 1 and not 0? 

//how to combine into one function:
  // -receiving the callback for "inningCB," 
  // - receiving the number of innings,
  // - update the score of home and away teams after each inning
  // - return an object after the last inning with final score




/* Task 4: 
// create a function called getInningScore 
// the function should take the inning function as an argument 
// it should return an object with with a score for home and a score for away that that populates from invoking the inning callback. */

function getInningScore() {
  /*Your Code Here */
}
/* Task 5: scoreboard()
Use the scoreboard function below to do the following:
  1. Receive a callback function, that you create, called `getInningScore`
  2. Receive the callback function `inning` from Task 2
  3. Receive a number of innings to be played
  4. Return an array where each of it's index values equals a string stating the
  Home and Away team's scores for each inning (see example below)
  5. If there's a tie, add this message with the score to the end of the array: 
     "This game will require extra innings: Away 12 - Home 12"  (see tie example below)
     If there is no tie, add this message to the end of the array: 
     "Final Score: Away 13 - Home 11"  (see no tie example below)
  HINT: `getInningScore` should be invoked by `scoreboard` and use `inning` to get and return the scores back to `scoreboard`
  
  For example: If there is no tie, invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 2", 
  "Inning 2: Away 2 - Home 3",
  "Inning 3: Away 4 - Home 4", 
  "Inning 4: Away 5 - Home 5", 
  "Inning 5: Away 7 - Home 7", 
  "Inning 6: Away 9 - Home 8", 
  "Inning 7: Away 10 - Home 8", 
  "Inning 8: Away 12 - Home 9",
  "Inning 9: Away 13 - Home 11", 
  "Final Score: Away 13 - Home 11"  
]  
  If there is a tie, invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 2", 
  "Inning 2: Away 2 - Home 3",
  "Inning 3: Away 4 - Home 4", 
  "Inning 4: Away 5 - Home 5", 
  "Inning 5: Away 7 - Home 7", 
  "Inning 6: Away 9 - Home 8", 
  "Inning 7: Away 10 - Home 8", 
  "Inning 8: Away 12 - Home 10",
  "Inning 9: Away 12 - Home 12", 
  "This game will require extra innings: Away 12 - Home 12"
]  
  */


function scoreboard(/* CODE HERE */) {
  /* CODE HERE */
}




/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working');
  return 'bar';
}
export default{
  foo,
  processFirstItem,
  counter1,
  counter2,
  inning,
  finalScore,
  getInningScore,
  scoreboard,
}
// test test test





function score(){
  return Math.floor(Math.random() * Math.floor(5));
}
// create a hockey game function that takes a score as callback and return a score for home and away in the form of an object 

// step 1 - we need a higher order function called hockey game
// step 2 - we want to give hockeygame a parameter (this will be a callback of score when we pass in arguments)
// we want to return an object inside the function 
// the object should have a key for home and a key for away
// the value of these keys should invoke score 

function hockeyGame(scoreCB){
  return {
    Home: scoreCB(),
    Away: scoreCB()
  }
}

// console.log(hockeyGame(score));

// create a function called totalGameScore - it should take score and hockeyGame as callbacks and it should return an array with the score for each period

function totalGameScore(scoreCB, gameCB){
  const totalGame = [];
  let homeScore = 0;
  let awayScore = 0;
  
  for(let i = 0; i < 3; i++){
    const currentScore = gameCB(scoreCB)
    homeScore = homeScore + currentScore.Home
    awayScore = awayScore + currentScore.Away
    totalGame.push(`Period ${i + 1}: Away ${currentScore.Away} - Home ${currentScore.Home}`);
  }
  
  return totalGame; 
}

console.log(totalGameScore(score, hockeyGame));