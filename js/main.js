var predictBtn = document.getElementById("predict-button");
var questionInput = document.getElementById("question-input").value;
var freezeLayer = document.getElementById("freezeLayer");
var answerWindow = document.getElementById("answer-window");
var answerText = document.getElementById("answer-text");
var okayBtn = document.getElementById("okay-btn");

var magic8Ball={};
    magic8Ball.listOfAnswers = ["Definitely!", "Very Likely!", "Hell, yea!", "Nopey Nope!", "Don\'t Count On It!", "Odds Not In Your Favor!", "Future Hazy", "Too Lazy To Predict", "Ask Again Later"];
    magic8Ball.askQuestion = function(questionInput) {
        // Get Random Number
        var random = Math.random();

        // Random Number * Array Length
        var randomNumberArray = random * this.listOfAnswers.length;

        // Round Off
        var randomIndex = Math.floor(randomNumberArray);

        //Get Random Answer
        var answerMe = this.listOfAnswers[randomIndex];

        answerText = answerMe;

    }

predictBtn.addEventListener("click", magic8Ball.askQuestion(questionInput));


