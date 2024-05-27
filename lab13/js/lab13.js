// index.js - Lab 10 - Javascript for the Web
// Author: Sam Atilano <batilano@ucsc.edu>
// Date: 17 May

var maxFactors = 4;

var outputEL = document.getElementById("output");

//get values from the webpage and write them to an object
//returns an object that will look like this;
// {3: "Fizz", 5: "Buzz", 7: "Boom"}
function getFactorObj() {
    var factorObj = {};
    for (var factor = 0; factor < maxFactors; factor++) {
        var numId = "num" + factor;
        var textId = "text" + factor;
        var numValue = document.getElementById(numId).value;
        var textValue = document.getElementById(textId).value;
        console.log(factor + ") num:", numValue, "text:", textValue);
        //if any value is blank, do not use it
        if (numValue && textValue) {
            factorObj[numValue] = textValue;
        }
    }
    return factorObj;
}

function outputToPage(str) {
    var newEl = document.createElement("p");
    newEl.innerHTML = str;
    outputEl.appendChild(newEl);
}

//given a number and an object that looks like this:
//      {3: "Fizz", 5: "Buzz", 7: "Boom"}
//loops over the numbers and outputs the number and the matching text
//for factors
function fizzBuzzBoom(maxNums, factorObj) {
    //iterate over all of out numbers
    for (var num=0; num <= maxNums; num++) {
        //reset output string
        var outputStr = "";
        //iterate over the factors we got from the html
        for (var factor in factorObj) {
            //check to see if this num is a multiplier of factor
            if (num % Number(factor) === 0) {
                //if yes, then add the text to output string
                outputStr += factorObj[factor];
            }
        }
        //now if we have words in outputStr, format it like this " - FizzBuzz!"
        if (outputStr) {
            outputStr = " - " + outputStr + "!";
        }
        outputToPage(num.toString() + outputStr);
    }
}

function reportError(str) {
    outputEl.innerHTML = "<div class='error'>" + str + "</div>";
}

document.getElementById("submit").addEventListener("click", function() {
    var max = document.getElementById("max").value;
    console.log("max:", max)
    if (!max) {
        reportError("You must provide a maximum");
        return;
    }
    var factorObj = getFactorObj();
    console.log("factorObj:", factorObj);
    if (Object.keys(factorObj).length === 0) {
        reportError("You must provide at least one factor and text");
        return;
    }
    //clear error if one is there
    outputEl.innerHTML = "";
    fizzBuzzBoom(Number(max), factorObj);
    outputEl.classList.add("cols");
});