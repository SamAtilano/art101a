// index.js - Lab 9 - Libraries & jQuery
// Author: Sam Atilano <batilano@ucsc.edu>
// Date: 13 May

//add button to challenge section
$("#challenge").append("<button id='button-challenge'>Click Here!</button>");
//add a click listener to the challenge button
$("button-challenge").click(function(){
    //now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});

//add button to problems section
$("#problems").append("<button id='button-problems'>Click Here 2!</button>");

//add button to results section
$("#results").append("<button id='button-results'>Click here 3!</button>");