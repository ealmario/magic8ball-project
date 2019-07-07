// Javascript Media Query
document.addEventListener('DOMContentLoaded', init);

function init(){
    var query = window.matchMedia("min-width: 769px");

    if(query.matches){
        //if page is wider than 769px
        document.querySelector('h1'.valueOf) = "Virtual Magic 8 Ball!";
    }    
    else{
        //if page is narrower than 769px
        document.querySelector('h1'.valueOf) = "Ask Away!";
    }
}

/*
var predictBtn = getElementById("predict-button");
var questionInput = getElementById("question-input");
var answerWindow = getElementById("answer-window");
var answerText = getElementById("answer-text");
var okayBtn = getElementById("okay-btn");

var magic8Ball={};
magic8Ball.listOfAnswers = ["Definitely!", "Very Likely!", "Hell, yea!", "Nopey Nope!", "Don\'t Count On It!", "Odds Not In Your Favor!", "Future Hazy", "Too Lazy To Predict", "Ask Again Later"];
magic8Ball.askQuestion = function() {
    // Get Random Number
    var random = Math.random();

    // Random Number * Array Length
    var randomNumberArray = random * this.listOfAnswers.length;

    // Round Off
    var randomIndex = Math.floor(randomNumberArray);

    //Get Random Answer
    var answerMe = this.listOfAnswers[randomIndex];

    var messageText = answerMe;

}

predictBtn.addEventListener("click", magic8Ball.askQuestion());
magic8Ball.askQuestion();
