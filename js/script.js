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
    });
});


// DOCUMENT READY FUNCTION BELOW

