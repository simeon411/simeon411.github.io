$(document).ready(function(){

	
	// var  characters = {}
	// 	{
	// 		name: "Obi-Wan Kenobi",
	// 		health: 120,
	// 		attackPower: 10,
	// 		counterPower: 15,
	// 	},
	// 	{
	// 		name: "Luck Skywalker",
	// 		health: 100,
	// 		attackPower: 5,
	// 		counterPower: 10,
	// 	},
	// 	{
	// 		name: "Darth Sidious",
	// 		health: 150,
	// 		attackPower: 10,
	// 		counterPower: 12,
	// 	},
	// 	{
	// 		name: "Darth Maul",
	// 		health: 180,
	// 		attackPower: 25,
	// 		counterPower: 20,
	// 	}

	// ];


	// function characters (name, picture, health, attackPower, counterPower){}
	// 	this.name = name;
	// 	this.picture = picture;
	// 	this.health = health;
	// 	this.attackPower = attackPower;
	// 	this.counterPower = counterPower;
	// }
	var newGame = true;
	var enemySelected = false;
	var currentEnemy;
	var yourPlayer;
	var totalEnemies = 3;
	var players = [];
	var filteredPlayers = [];

	var nameOptions = ["Obi-Wan Kenobi", "Luke Skywalker", "Darth Sidious", "Darth Maul"];
	var healthOptions = [120, 100, 150, 180];
	var attackPowerOptions = [6, 8, 10, 12];
	var counterPowerOptions = [6, 12, 20, 30];
	var pictureOptions = ["assets/images/Obi.jpg", "assets/images/Luke.png", 
	"assets/images/Sid.jpg", "assets/images/maul.jpeg"]
	var playerHealth;
	var currentEnemyHealth;

	//Initialize array of players, and give each an attribute.
	function startGame(){
		for (var i = 0; i < healthOptions.length; i++) {
			players[i] = $("<img>");

			players[i].attr("name", nameOptions[i]);
			players[i].attr("HP", healthOptions[i]);
			players[i].attr("attackPower", attackPowerOptions[i]);
			players[i].attr("counterPower", counterPowerOptions[i]);
			players[i].attr("src", pictureOptions[i]);
			players[i].addClass("img-thumbnail player-images");

			$("#AllCharacters").append(players[i]);




		}
	}

	startGame();

	function reset(){
		$("#txtOut").empty();
		$("#defender").empty();
		$("#defenderHealth").empty();
		$("#enemiesAvailable").empty();
		$("#myCharacter").empty();
		$("#myCharacterName").empty();
		$("#myCharacterHealth").empty();
		$("#restart").addClass("hidebutton");

	}



	//Clicking player images, if this is a new game, then set clicked
	//image to "yourPlayer"

	$(".player-images").on("click", function(){
		if (newGame === true){
			yourPlayer = ($(this));
			yourPlayer.removeClass("player-images");

			//Filter the array of players, and remove "yourPlayer" from the array.
			filteredPlayers = players.filter(function(obj){
				return (obj.attr("name") !== yourPlayer.attr("name"))
			});

			//Write your player to myCharacter div
			$("#myCharacter").append(yourPlayer);
			$("#myCharacterName").append(yourPlayer.attr("name"));
			$("#myCharacterHealth").append(yourPlayer.attr("HP"));
			$("#enemiesAvailable").append(filteredPlayers);
			playerHealth = parseInt(yourPlayer.attr("HP"));
			playerAttack = parseInt(yourPlayer.attr("attackPower"));
			
			yourPlayer.addClass("myplayer");
		};
		// Filter the array of players, and remove "currentEnemy" from the array.
		if (newGame === false && enemySelected === false){
			currentEnemy = ($(this));
			filteredPlayers = players.filter(function(obj){
				return (obj.attr("name") !== currentEnemy.attr("name"))
			});

			$("#defender").append(currentEnemy);
			$("#defenderHealth").text(currentEnemy.attr("HP"));
			enemySelected = true;
			$("#txtOut").empty();
			totalEnemies--;	
		}
		newGame = false;
	});

	$("#fightbttn").on("click", function(){
			if (enemySelected === false){
				$("#txtOut").html("<p>No Enemy is currently selected, please select an enemey</p>");
			}
			else if (playerHealth <= 0){
				console.log("You lose, restart the game");
			}
			else {
				currentEnemyHealth = parseInt(currentEnemy.attr("HP"));
				currentEnemyAttack = parseInt(currentEnemy.attr("counterPower"));

				currentEnemyHealth = currentEnemyHealth - playerAttack;
				playerHealth = playerHealth - currentEnemyAttack;

				currentEnemy.attr("HP", currentEnemyHealth); 
				yourPlayer.attr("HP", playerHealth);
				console.log(playerAttack);

				$("#defenderHealth").text(currentEnemyHealth);
				$("#myCharacterHealth").text(playerHealth);
				
				$("#txtOut").html("<p>You attacked " + currentEnemy.attr("name") + " for " + 
					playerAttack + " damage <br />" + currentEnemy.attr("name") + 
					" attacked you back for " + currentEnemyAttack + " damage </p>");

				playerAttack = playerAttack + parseInt(yourPlayer.attr("attackPower"));
			}

			if (playerHealth <= 0){
				$("#txtOut").html("<p>Game Over, You loose!</p>");
				$("#restart").removeClass("hidebutton");
			}
			if (currentEnemyHealth <= 0 && enemySelected === true && playerHealth > 0){
				enemySelected = false;
				$("#defender").empty();
				$("#defenderHealth").empty();
				$("#txtOut").html("<p>You defeated this enemy!</p>");
				
			}
			if (totalEnemies <= 0 && currentEnemyHealth <= 0)
			{
				$("#restart").removeClass("hidebutton");
				$("#txtOut").html("<p>You win</p>");
			}

	});

	$("#restartbttn").on("click", function(){
		reset();
		startGame();
	});


});