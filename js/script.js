// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("document").ready(function(){
    $("#shoot").click(function(){
        // click actions happen here
       let userChoice = $("#input").val(); 
       $("#userChoice").text(`${userChoice}`);
       let computerChoices = ["rock","paper", "scissor"];
       let choice = Math.floor(Math.random()*3);
       let computer = computerChoices[choice]
       $("#computerChoice").text(computer);
       if (computer === userChoice) {
          $("#result").text("tied") 
       }
    });
});


// DOCUMENT READY FUNCTION BELOW

