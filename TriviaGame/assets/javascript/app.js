$(document).ready(function(){
	var time = 10;
	var intervalId;
	var correctAnswers = 0;
	var wrongAnswers = 0;
	var unAnswered = 0;
	var questions = [ 
					{
						question: "What nickname did NBA star Karl Malone earn for his ability to deliver in the clutch?",
						choices: ["The Currier", "The Mailman","FedEx", "The Doctor"],
						answer: 1
					},
					{
						question: "What was the first NBA team to win 70 games or more in the regular season?",
						choices: ["The Chicago Bulls" , "Boston Celtics", "Los Angelis Lakers", "New York Knicks"],
						answer: 0
					},
					{
						question: "What Baltic country did Portland Trail Blazer Arvydas Sabonis play for at the 1996 Olympics?",
						choices: ["Lithuania", "latvia", "Estonia", "Poland"],
						answer: 0
					},
					{
						question: "What year was the National Basketball Association first established?",
						choices: ["1923", "1937", "1946", "1952"],
						answer: 2
					},
					{
						question: "What year did the NBA-ABA merger occur?",
						choices: ["1971", "1976", "1962", "1958"],
						answer: 1
					},
					{
						question: "Who was the first African American to play in the NBA?",
						choices: ["Earl Lloyd", "Sam Jones", "Jessie Jackson", "Bill Russell"],
						answer: 0
					},
					{
						question: "How many titles did the celtics win in a row starting in 1957?",
						choices: ["4", "6", "7", "8"],
						answer: 3
					},
					{
						question: "How many games are in an NBA Season?",
						choices: ["50", "88", "82", "75"],
						answer: 2
					},
				];

	 $('#btnSubmit').click(calculateScore);


	
  	$("#startGamebuttn").click(startGame);

  	function calculateScore(){
  		
  		var selValue1 = $('input[name=q1]:checked').val(); 
        var selValue2 = $('input[name=q2]:checked').val();
        var selValue3 = $('input[name=q2]:checked').val();
        
        if (selValue1 == questions[0].answer){
        	correctAnswers++;
        }
        else if (selValue1 == undefined) {
        	unAnswered++;
        }
        else{
        	wrongAnswers++;
        }
        if (selValue2 == questions[1].answer){
        	correctAnswers++;
        }
        else if (selValue2 == undefined) {
        	unAnswered++;
        }
        else{
        	wrongAnswers++;
        }
        if (selValue3 == questions[2].answer){
        	correctAnswers++;
        }
        else if (selValue3 == undefined) {
        	unAnswered++;
        }
        else{
        	wrongAnswers++;
        }

        $("#qna").empty();
        $("#timeleft").empty();
        $("#qna").append("<p><h2>Correct: " + correctAnswers);
        $("#qna").append("<p><h2>Wrong: " + wrongAnswers);
        $("#qna").append("<p><h2>Unanswered: " + unAnswered);
        clearInterval(intervalId);

  	}

	function startGame(){
	$("#startGamebuttn").addClass("hidebutton");
	run();
	$("#qna").removeClass("hidebutton");


	}

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {
      time--;

      //  Show the number in the #timeleft tag.
      $("#timeleft").html("<h2>Time Remaining: " + time + " Seconds</h2>");


      //  Once number hits zero...
      if (time === 0) {

        clearInterval(intervalId);
        calculateScore();
      }
    }

 //    function printQuestions(){
 //    	for (var i = 0; i < questions.length; i++){
 //    		var choiceCount = 0;
 //    		var writer = $("#qna");
 //    		var newDiv = $("<div>");
 //    		var currentQ = $("<p>").text(questions[i].question);
 //    		newDiv.append(currentQ);

 //    		var label = $("<label>", {class: 'radio-inline'});
 //    		var input = $("<input type='radio' name='choices' value=>");

    		
	// 		choiceCount++;

 //    		writer.append(currentQ);
 //    		writer.append($("<br>"));
 //    		writer.append(label);
 //    		writer.append(questions[i].choices[choiceCount]);
 //    		writer.append(input);
 //    		writer.append($("<br>"));
    	
 //    	}
	// }
});
