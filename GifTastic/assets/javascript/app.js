$(document).ready(function(){

var playersArray = ["Kevin Durant", "John Stockton", "Marcus Smart", "Hakeen Olajuwon" ,"Russell Westbrook", "Jaylen Brown", "Shaquille O'Neal", "Steph Curry", "Victor Oladipo"];

//Button printing function.
function printButtons(){
  $("#playersButtonsDisplay").empty();
  $("#userMessages").empty();
  for (var i = 0; i < playersArray.length; i++){

     var buttons = $('<button>' + playersArray[i] + '</button>');
     buttons.attr("name", playersArray[i]);
     buttons.addClass("playerButtons")
     buttons.appendTo("#playersButtonsDisplay");   
  }
}

printButtons();

  //Player submitting a new player name function
  $("#playerSubmit").on("click", function(){
      event.preventDefault();
      var newPlayer = $("#playerInput").val().trim();
      //If input is empty
      if (newPlayer === ""){
        $("#userMessages").html("No player name entered, please try again.")
      }
      else{
        playersArray.push(newPlayer);
        printButtons();
      }
  });


  $(document.body).on("click", ".playerButtons", function() {
    event.preventDefault();
    $("#userMessages").empty();
    $("#playersDisplay").empty();
    var playerName = $(this).attr("name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      playerName + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
        .done(function(response) {
          // Storing an array of results in the results variable

          var results = response.data;

          // Looping over every result item
            for (var i = 0; i < results.length; i++) {

              // Creating a div with the class "item"
              var gifDiv = $("<div class='item'>");

          // Storing the result item's rating
          var rating = results[i].rating;

          // Creating a paragraph tag with the result item's rating
          var p = $("<p>").text("Rating: " + rating);

          // Creating an image tag
          var personImage = $("<img>");

          
          personImage.attr("still-image", results[i].images.fixed_height_still.url);
          personImage.attr("animated-image", results[i].images.fixed_height.url);
          personImage.attr("src", personImage.attr("still-image"));
          personImage.attr("data-state", "still");
          personImage.addClass("gif");

          // Appending the paragraph and personImage we created to the "gifDiv" div we created
          gifDiv.append(p);
          gifDiv.append(personImage);

          // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
          $("#playersDisplay").append(gifDiv);
            
        }
        });

  });
  //On click of "images", check state and change the picture accordingly.
  $(document.body).on("click", ".gif", function() {
      event.preventDefault();
      $("#userMessages").empty();

      if ($(this).attr("data-state") === "still") {
        $(this).attr("src", $(this).attr("animated-image"));
        $(this).attr("data-state", "animate");
      } 
      else {
        $(this).attr("src", $(this).attr("still-image"));
        $(this).attr("data-state", "still");
      }
  });


});