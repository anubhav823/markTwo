var rls = require('readline-sync')

let questions = [
  {
    question: 'What is the name of Batman\' mother? ',
    answer: 'Martha'
  },
  {
    question: 'Who is the latest actor to play the role of Batman(as of 2022)? ',
    answer: 'Robert Pattinson'
  },
  {
    question: 'What is India\' national fruit? ',
    answer: 'Mango'
  },
  {
    question: 'What is India\'s national emblem? ',
    answer: 'Ashok Chakra'
  },
  {
    question: 'Who is the father of Indian Nuclear Physics? ',
    answer: 'Homi Jehangir Bhabha'
  },
  {
    question: 'Which UK Prime Minister was responsible for the Bengal Famine? ',
    answer: 'Winston Churchill'
  }
]

let users = [
  {
    userName: 'Anubhav',
    score: 4
  }
]

let name ='';
let user ={
  
}
function askName() {
  name = rls.question("What is your name? ")
  user = {
    userName: name,
    score: 0
  }
}

function updateHighestScore() {
  if(users[0].score > user.score){
    console.log("Highest scorer is "+users[0].userName+" with "+users[0].score);
  } else {
    users[0] = user;
    console.log("You are the highest scorer now!")
  }
}

function checkAns() {
  for (let ques of questions) {
    let ans = rls.question(ques.question);
    if (ans.toLowerCase() === ques.answer.toLowerCase()) {
      user.score++;
      console.log("Correct! Your score is now " + user.score);
    } else {
      console.log("Wrong! The correct answer was " + ques.answer);
    }
    console.log();
  }
  console.log("Your final score is " + user.score);
  updateHighestScore();
}

askName()
checkAns()