$( document ).ready( function() {
  $( "#start" ).click( function() {
    $( ".hideOnLoad" ).css("visibility","visible" );
    $( ".afterStarting" ).css("visibility","hidden" );
      //hides everything besides title and start button on load
  });
});


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
    //when enter is pressed
    }
  });
});

const questions = [
  {
    number:1,
    question:"The German Shepard is of what descent?",
    answer1: "German",
    answer2: "Swiss",
    answer3: "Austrian",
    answer4: "French",
  },
  {
    number:2,
    question:"The Pug is from where?",
    answer1: "Asia",
    answer2: "Europe",
    answer3: "North America",
    answer4: "South America",
  },
  {
    number:3,
    question:"The labrador retriever is trained for what?",
    answer1: "Retrieving",
    answer2: "Dog Shows",
    answer3: "Hunting",
    answer4: "Eating",
  },
  {
    number:4,
    question:"The Chihuahua is from where?",
    answer1: "Mexico",
    answer2: "England",
    answer3: "France",
    answer4: "China",
  },
  {
    number:5,
    question:"Which of these dogs tend to be naturally aggressive?",
    answer1: "Pitbull",
    answer2: "Weiner Dog",
    answer3: "Pug",
    answer4: "Poodle",
  },
]

const correctAnswers = [
  "German",
  "Asia",
  "retrieving",
  "mexico",
  "pitbull",
]

/*

function displayQuestion() {
  $("#start").click( function () {
  $("#question").text(questions)
  })
}

*/