var question = document.getElementById('question-input').value;
var answerText = document.getElementById('answer-text');
var predictBtn = document.getElementById('predict-button');
var okayBtn = document.getElementById('okay-btn');

//magic 8 ball object
var magic8Ball = {};
	magic8Ball.listOfAnswers = ["Definitely!", "Very Likely!", "Hell, yea!", "Nopey Nope!", "Don\'t Count On It!", "Odds Not In Your Favor!", "Future Hazy", "Too Lazy To Predict", "Ask Again Later", "Erm, Maybe", "Not sure", "Don\'t Know"];
	magic8Ball.askQuestion = function(question) {
        //randomNumber
        var randomNumber = Math.random();
        //Random Number * Array length
        var randomNumberArray = randomNumber*this.listOfAnswers.length;
        //Round Off
        var randomIndex = Math.floor(randomNumberArray);
        // Random Answer
        var answerMe = this.listOfAnswers[randomIndex];

        answerText.innerText = answerMe;
    }

predictBtn.addEventListener('click', function(){
    magic8Ball.askQuestion(question);
    document.querySelector('.bg-modal').style.display = 'flex';
});

okayBtn.addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'none';
})


