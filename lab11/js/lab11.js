// index.js - Lab 10 - Javascript for the Web
// Author: Sam Atilano <batilano@ucsc.edu>
// Date: 17 May

//sorts the characters of a string in alphabetical order
function sortString(inputString) {
    //we have to convert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
}

//click listener for button
$("#submit").click(function(){
//get value of input field 
const userName= $("#user-name").val();
//sort it
userNameSorted = sortString(userName);
//append a new div to out output div
$("#output").html('<div class= "text"><p>' + userNameSorted + '</p></div>');
});