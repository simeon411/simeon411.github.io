$(document).ready(function(){

	
	// var  characters = [
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


	function characters (name, picture, health, attackPower, counterPower){}
		this.name = name;
	 	this.picture = picture;
	 	this.health = health;
	 	this.attackPower = attackPower;
	 	this.counterPower = counterPower;
	 }
	var newGame = true;
	var currentEnemy;
	var yourPlayer;
	var totalEnemies = 4;



	for (var i = 0; i < totalEnemies; i++) {
		var players[i] = $("<img>");

		players[i].attr("name", nameOptions[i]);
		players[i].attr("HP", healthOptions[i]);
		players[i].attr("attackPower", attackPowerOptions[i]);
		players[i].attr("counterPower", counterPowerOptions[i]);
		players[i].attr("src", pictureOptions[i]);
		players[i].addClass("img-thumbnail player-images");

		$("#AllCharacters").append(players);
	}

	if (newGame === true){
		$(".player-images").on("click", function(){
			yourPlayer = ($(this));
			newGame = false;

		});
	}

	

});