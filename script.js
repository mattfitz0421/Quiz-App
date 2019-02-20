$( document ).ready( function() {
  $( "#start" ).click( function() {
    $( ".hideOnLoad" ).css("visibility","visible" );
    $( ".afterStarting" ).css("visibility","hidden" );
      //hides everything besides title and start button on load
      populateQuestionData(0);
      //starts quiz with question1
      feedback(0);
      //Feedbck after first question
  });
});

function populateQuestionData(questionNumber){
var fetchString;
fetchString = questions[questionNumber].question;
$("#question").html(fetchString);
fetchString = questions[questionNumber].answer1;
$("#answer1").val(fetchString);
fetchString = questions[questionNumber].answer2;
$("#answer2").val(fetchString);
fetchString = questions[questionNumber].answer3;
$("#answer3").val(fetchString);
fetchString = questions[questionNumber].answer4;
$("#answer4").val(fetchString);
//Fills placeholders with content
}

function answerOneFunction() {
 $(".arrowFeedback").css("visibility", "visible")
//when answer one is clicked
};

function answerTwoFunction() {
  $(".arrowFeedback").css("visibility", "visible")
//when answer two is clicked 
};

 function answerThreeFunction() {
  $(".arrowFeedback").css("visibility", "visible")
//when answer three is clicked 
};

 function answerFourFunction() {
  $(".arrowFeedback").css("visibility", "visible")
//when answer four is clicked 
};


$(function(){
  $("#start").keyup(function (e) {
    if (e.which == 13) {
      $('#start').trigger('click');
    }
  });
});
//when enter is pressed


const questions = [
  {
    number:1,
    question:"The German Shepard is of what descent?",
    answer1: "German",
    answer2: "Swiss",
    answer3: "Austrian",
    answer4: "French",
    feedback: "The German Shepard is from Germany"
  },
  {
    number:2,
    question:"The Pug is from where?",
    answer1: "Asia",
    answer2: "Europe",
    answer3: "North America",
    answer4: "South America",
    feedback: "The Pug is from Asia"
  },
  {
    number:3,
    question:"The labrador retriever is trained for what?",
    answer1: "Retrieving",
    answer2: "Dog Shows",
    answer3: "Hunting",
    answer4: "Eating",
    feedback: "The Labrador Retriever is trained for retrieving"
  },
  {
    number:4,
    question:"The Chihuahua is from where?",
    answer1: "Mexico",
    answer2: "England",
    answer3: "France",
    answer4: "China",
    feedback: "The Chihuahua is from Mexico"
  },
  {
    number:5,
    question:"Which of these dogs tend to be naturally aggressive?",
    answer1: "Pitbull",
    answer2: "Weiner Dog",
    answer3: "Pug",
    answer4: "Poodle",
    feedback: "Pitbulls tend to be naturally aggressive"
  },
]
//Array with objects containing question and answers

const correctAnswers = [
  "German",
  "Asia",
  "retrieving",
  "mexico",
  "pitbull",
]
//Array of Correct Answers


$(document).keypress(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(keycode == '13'){
    $(element).trigger('click');;   
  }
});
//Lets user press enter key to fire

function feedback(questionFeedback){

  var fetchString;
  
  fetchString = questions[questionFeedback].feedback;
  $("#feedback").html(fetchString);
  
}
//Function itself to place feedback over placeholder


function arrowNext() {
  $(".arrowFeedback").css("visibility", "hidden")
 
}


/*

//loop for when arrow button is clicked (click is already programmed in HTML), renders next question and set of answers

function progressLoop() {
  for ("statement 1:exexcutedbefore"; "statement 2:definesCondtion"; "statement 3:executedAfterCodeBlockExecuted) 
  {
    // code block to be executed
  }
}
//loop for when arrow and start button are clicked, increase current/total 

function resultsPage() {
  if (condition) {
    // block of code to be executed if the condition is true
  } else { 
    // block of code to be executed if the condition is false
  }
}
//if and else statement that renders results page should question number = 5 
//and arrow is clicked

function score() {
  if (condition) {
    // block of code to be executed if the condition is true
  } else { 
    // block of code to be executed if the condition is false
  }
}
//if and else statement if answer= true ++ total score


*/