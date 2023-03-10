var readlineSync = require('readline-sync');
var score = 0;

function welcome()
{
  var userName = readlineSync.question("What is your name Boy??? ")
  console.log("Welcome "+userName+" DO YOU KNOW Shantanu?")
}

var highScores = [
  {
    name: "Tanay",
    score: 3,
  },

  {
    name: "Akash",
    score: 2,
  },
]

var questions = [{ question : "Where do I live? ",
                  answer : "Bramhapuri"},{
                    question : "Where do I work? ",
                  answer : "Amdocs"
                  },{
                    question : "My favourite superhero would be? ",
                  answer : "Batman"
                  },{
                    question : "Where I completed my collage? ",
                    answer : "Pune"
                  }
]

function play(question,answer){

  var userAnswer = readlineSync.question(question)

  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    score++;
    console.log("Right..")
  }else{
    console.log("Wrong..")
  }
  console.log("Current Score: ",score)
  console.log("------------------")
}

function game()
{
  
  for(var i=0;i<questions.length;i++)
  {
    var currentQuestion = questions[i]
    play(currentQuestion.question,currentQuestion.answer)
  }
  
}

function showScore(){
  console.log("YAY! you score: ",score)

  console.log("Check out the high scores, IF you Should be there Ping me I'll update it")

  highScores.map(score => console.log(score.name, " : ", score.score))
}

welcome()
game()
showScore()