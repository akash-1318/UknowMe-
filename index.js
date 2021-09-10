var readLineSync = require('readline-sync');
const chalk = require('chalk');
var score = 0;

var userName = readLineSync.question(chalk.black.bgGreen.bold("Heyo! may i have your name please?\n"));

console.log(chalk.bgYellow.whiteBright("welcome to quickEarn quizz competition " + userName ));

console.log(chalk.yellowBright("\nThis quizz contains 5 questions every right answer will let me know how close you are to me.\n\n"))

easy = [
  {
    question : "Question 1 : What's the name of my hometown?\n" + "1. Faizabad \n" + "2. Firozabad \n" + "3. Agra\n" + "4. Makkhanpur \n",
    answer : 4
  },
  {
    question : "Question 2: Who is my favorite superhero?\n" + "1. Spiderman \n" + "2. Batman \n" + "3. Ironman \n" + "4.Thor \n",
    answer : 3
  },
  {
    question : "Question 3: What was the name of my school from where i passed 10th? \n" + "1. SMK  \n" + "2. Kid's corner \n" + "3. GyanDeep \n" + "4. DPS \n",
    answer : 1
  },
  {question : "Question 4: From which university I graduated? \n" + "1. Agra University \n" + "2. Delhi University \n" + "3. Integral University \n" + "4. None of the above \n",
  answer : 1
  },
  {
    question : "Question 5: What's my favorite fruit? \n" + "1. Banana \n" + "2. Apple \n" + "3. Mango \n" + "4. Papaya \n" ,
    answer : 2
  }
]

function play(question, answer){
  var userAnswer = readLineSync.question(question);

  if(userAnswer == answer){
    console.log(chalk.green("Right answer"));
    score = score+1;
  } else{
    console.log(chalk.red("wrong answer"));
    console.log(chalk.green("correct answer is: " + answer));
    score = score-1;
  }
  console.log("current score: " + score);
  console.log("------------------");
}



function chooseQuestion(){
  for(var i =0; i<easy.length; i++){
  play(easy[i].question, easy[i].answer)}
  } 
  console.log(chalk.bgYellow.white("Your total score is: " + score))


chooseQuestion();