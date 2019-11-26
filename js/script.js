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
       else if (computer==="scissor" && userChoice==="rock"){
        $("#result").text("won")
       }
       else if (computer==="scissor" && userChoice==="paper"){
        $("#result").text("lose")
       }
       else if (computer==="paper" && userChoice==="rock"){
        $("#result").text("lose")
       }
       else if (computer==="rock" && userChoice==="scissor"){
        $("#result").text("lose")
       }
       else if (computer==="rock" && userChoice==="paper"){
        $("#result").text("won")
       }
       else if (computer==="paper" && userChoice==="scissor"){
        $("#result").text("won")
       }
    });
});


// DOCUMENT READY FUNCTION BELOW

