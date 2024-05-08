// index.js - Lab 7 - Functions
// Author: Sam Atilano <batilano@ucsc.edu>
// Date: 3 May

// sortUserName - a function that takes user input and sorts the letters
// of the name
function sortUserName () {
    let userName = window.prompt("Hi. Please tell me your name so I can fix it.");
    console.log("userName =", userName);
    //split string to array
    let nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    //sort the array
    let nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    //join array back to a string
    let nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    return nameSorted; 
}

//output
document.writeln("Oh hey, I've fixed your name:", sortUserName(), "</br>");