var readlineSync = require("readline-sync");

//score
var score = 0;
var highScore = 10;
var usrName = readlineSync.question("What's your name?");

console.log("Welcome" + usrName + "to how well do you know Jawwad?");


// function 
function quiz(ques, ans) {
    ques = readlineSync.question(ques);

    if(ques == ans){
        console.log("Right")
        score = score + 1;
        console.log("Your score is " + score);
    } else {
        console.log("Wrong")
        console.log("Your score is " + score);
    }
}

//array and onjects
var game = [{
    question: "What's my favorite color? ",
   answer: "black"
 }, 
 
 {
   question: "What's my favorite superhero? ",
   answer: "batman"
 },
 
 {
   question: "I love tea or coffee? ",
   answer: "tea"
 }, 
 
 {
   question: "What's my favorite film? ",
   answer: "john wick"
 }, 
 
 {
   question: "What's my favorite dish? ",
   answer: "biryani"
 },
 
 {
   question: "Am I cat person or dog person? ",
   answer: "dog"
 },
 
 {
   question: "Do I like winter or summer? ",
   answer: "winter"
 },
 
 {
   question: "Do I like sweets? yes or no - ",
   answer: "no"
 },
 
 {
   question: "Do I like reading? yes or no - ",
   answer: "yes"
 },
 
 {
   question: "My favorite book series? ",
   answer: "jack reacher"
 }]

 //for loop for ques and ans
 for (i = 0; i < game.length; i++) {
     userAns = game[i]
     quiz(userAns.question, userAns.ans);
 }

 //final score
 console.log("The highest score is " + highscore);
 console.log("Your score is " + score)
 console.log("Send me the screenshot of your ")