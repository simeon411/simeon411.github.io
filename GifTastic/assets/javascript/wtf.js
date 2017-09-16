  var playersArray = ["Kevin Durant", "Marcus Smart", "Russell Westbrook", "Jaylen Brown", "Shaquille O'Neal", "Steph Curry", "Victor Oladipo"];

function printButtons(){
  $("#playersButtonsDisplay").empty();
  for (var i = 0; i < playersArray.length; i++){

     var buttons = $('<button>' + playersArray[i] + '</button>');
     buttons.attr("name", playersArray[i]);
     buttons.addClass("playerButtons")
     buttons.appendTo("#playersButtonsDisplay");   
  }
}

printButtons();


  $("#playerSubmit").on("click", function(){
      event.preventDefault();
      var newPlayer = $("#playerInput").val();
      playersArray.push(newPlayer);
      console.log(playersArray);
      printButtons();
  });