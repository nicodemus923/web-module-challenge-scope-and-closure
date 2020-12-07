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

     Counter 1 is a "counter maker" meaning that it's a function that creates a function. This could be used in "countless" situations where an unique counter is needed for some process that involves many separate moving/calculating pieces that may rely on each other for information or the output needed involves many different outputs. It could be engineered to fit the needs of something like a clock which contains many unique pieces. 

     Counter 2 is a simple counter that you'd use in any scenario where a counter is used once. Could be applied to a for-loop. 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 
Use the inning function below to do the following:
  1. Return a random whole number of points between 0 and 2 scored by one team in an inning
  
  NOTE: You will be using this function over and over again in the tasks below
  For example: invoking inning() should return a numerical score value of 0, 1, or 2
*/

function inning(){
  return Math.floor(Math.random() * 3);

}

console.log(inning());

/* Task 3: finalScore()
Use the finalScore function below to do the following:
  1. Receive the callback function `inning` that was created in Task 2 
  2. Receive a number of innings to be played
  3. After each inning, update the score of the home and away teams
  4. After the last inning, return an object containing the final (total) score of the game
For example: invoking finalScore(inning, 9) might return this object:
{
  "Home": 11,
  "Away": 5
}
*/ 

function finalScore(numCB, totInnings){
  let home = numCB() * totInnings; //numCB() calls to innings() but says "some unknown variable that's a function"
  let away = numCB() * totInnings; //numCB() is local so no need to declare as function
  let score = {"Home": home, "Away": away}
  return score; 

}
console.log(finalScore(inning, 9));




/* Task 4: 
// create a function called getInningScore 
// the function should take the inning function as an argument 
// it should return an object with with a score for home and a score for away that that populates from invoking the inning callback. */

function getInningScore(numCB) {
  let home = numCB();
  let away = numCB();
  let score = {"Home": home, "Away": away};
  return score;
}
console.log(getInningScore(inning));
/* Task 5: scoreboard()$
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


function scoreboard(cb1, cb2, innings) {
  for (let i = 0; i < innings; i++){
    return [`Inning ${i}: Away ${cb2} - Home ${cb2}`,];
  }
    let away = cb1;
    let home = cb1;
    if (away === home) {
      return `This game will require extra innings: ${cb1}`;
    } else {
      return `Final Score: ${cb1}`;
    }

}
console.log(scoreboard(getInningScore, inning, 9));

//UGGH. I'M LOST ON #5. GONNA HAVE TO COME BACK TO THIS. :(




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