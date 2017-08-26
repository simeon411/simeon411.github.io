$(document).ready(function(){

	
	var  characters = [
		{
			name: "Obi-Wan Kenobi",
			health: 120,
			attackPower: 10,
			counterPower: 15,
			picture: "assets/images/Obi.jpg"
		},
		{
			name: "Luck Skywalker",
			health: 100,
			attackPower: 5,
			counterPower: 10,
			picture: "assets/images/Luke.png"
		},
		{
			name: "Darth Sidious",
			health: 150,
			attackPower: 10,
			counterPower: 12,
			picture: "assets/images/Sid.jpg"
		},
		{
			name: "Darth Maul",
			health: 180,
			attackPower: 25,
			counterPower: 20,
			picture: "assets/images/maul.jpeg"
		}

	];


	// function characters (name, picture, health, attackPower, counterPower){}
	// 	this.name = name;
	// 	this.picture = picture;
	// 	this.health = health;
	// 	this.attackPower = attackPower;
	// 	this.counterPower = counterPower;
	// }
	var newGame = true;
	var currentEnemy;
	var yourPlayer;
	var enemiesLeft = 4;

	for (var i = 0; i < characters.length; i++) {
		var players = $("<img>");

		players.attr("src", characters[i].picture);
		players.addClass("img-thumbnail player-images");

		$("#AllCharacters").append(players);
	}

	if (newGame === true){
		$(".player-images").on("click", function(){
			yourPlayer = ($(this));
			newGame = false;
			console.log(yourPlayer)

		});
	}

	

});