var headerEl = document.getElementById("cardHead");
var btnStart = document.getElementById("btnStart");
var endQuiz = document.getElementById("quizOver");
var timer = document.getElementById("timer");
var secondsLeft = 600;
var count = localStorage.getItem("count");
var question1 = document.getElementById("question1");
var question2 = document.getElementById("question2");
var question3 = document.getElementById("question3");
var question4 = document.getElementById("question4");
var question5 = document.getElementById("question5");
var question6 = document.getElementById("question6");
var question7 = document.getElementById("question7");
var question8 = document.getElementById("question8");
var question9 = document.getElementById("question9");
var question10 = document.getElementById("question10");
var correct = document.getElementsByName("correct");
//var counter = document.getElementById("counter");
var scoreTable = document.getElementById("scoreTable");
var btnSubmit = document.getElementById("btnSubmit")
var savedScore = document.getElementById("savedScore")

endQuiz.style.visibility = "hidden";
timer.style.visibility = "hidden";
question1.style.visibility = "hidden";
question2.style.visibility = "hidden";
question3.style.visibility = "hidden";
question4.style.visibility = "hidden";
question5.style.visibility = "hidden";
question6.style.visibility = "hidden";
question7.style.visibility = "hidden";
question8.style.visibility = "hidden";
question9.style.visibility = "hidden";
question10.style.visibility = "hidden";
//scorecard.style.visibility = "hidden";
savedScore.style.visibility="hidden";


btnStart.addEventListener("click", function() {
    setTime();
    btnStart.style.visibility = "hidden";
    headerEl.style.visibility = "hidden";
    question1.style.visibility = "visible";
    timer.style.visibility = "visible";
})

function setTime() {
    var timerInterval = setInterval(function() {
        //alert("hi")
      secondsLeft--;
      //timer.textContent = secondsLeft + " Time left ";
        document.getElementById("timer").innerHTML = "Time left - " + secondsLeft + " sec";
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        quizOver()
      }
  
    }, 1000);
  }

  
  
  var counter = 0


function nextQuestion(questionId) {
    for (let i = 1; i < 11; i++) {
        document.getElementById("question" + i).style.visibility="hidden";
    } 
    document.getElementById(questionId).style.visibility="visible";
  }


function quizOver() {

    question10.style.visibility="hidden";
    document.getElementById('quizOver').style.visibility="visible";
    timer.style.visibility ="hidden";
    document.getElementById('counterId').innerHTML=counter;
    
    
    


}


btnSubmit.addEventListener("click", function() {
    var td1 = document.getElementById('scoreId');
    var text1 = document.createTextNode(counter);
    var td2 = document.getElementById('nameId');
    var initials = document.getElementById("initialsId").text;
    

    td1.appendChild(text1);
   // td2.appendChild(initials);
    endQuiz.style.visibility="hidden";
    savedScore.style.visibility="visible";
    localStorage.setItem("counter", counter);
    localStorage.setItem("initials", initials);




})

function incrementCounter() {
    counter++;
}