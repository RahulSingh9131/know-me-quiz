var readlineSync=require('readline-sync')
console.log("welcome to know-me quiz");
console.log("every correct answer fetch you +1 score");
console.log("----------");

var score=0;

var userName=readlineSync.question("what is your name? ");
console.log("welcome to the quiz",userName);
//declared function
function play(question,answer){
    var userAnswer=readlineSync.question(question);
    if(userAnswer.toUpperCase()===answer.toUpperCase()){
        console.log("right!!");
        score=score+1;
    }else{
        console.log("wrong!!");
    }
    console.log("your score is",score);
    console.log("******");
}
//declared array of questions.
var questionList=[
    question1={
        question:"where do i live?",
        answer:"PATNA"
    },
    question2={
        question:"the place i did my college from?",
        answer:"GWALIOR"
    },
    question3={
        question:"my fav. color is?",
        answer:"BLUE"
    },
    question4={
        question:"which phone brand do i use?",
        answer:"REALME"
    },
    question5={
        question:"my fav. marvel superhero?",
        answer:"IRONMAN"
    }
]
//declared for-loop for accsessing questions.
for(var i=0;i<questionList.length;i++){
    var response=questionList[i];
    play(response.question,response.answer)
}

console.log("yay!! the total score is: ",score);