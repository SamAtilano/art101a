// index.js - Lab 10 - Javascript for the Web
// Author: Sam Atilano <batilano@ucsc.edu>
// Date: 17 May

function generateRandomText() {
    const text = "Hello, this is some random text. I like pancakes but don't really like waffles. I like chocolate ice cream but don't really like vanilla ice cream. My favorite hobbies include drawing, reading, and writing.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random text
    return text.slice(randStart, randStart + randLen);
  }
// click listener for button
$("#make-convo").click(function(){
// get new fake dialogue
const newText = generateRandomText();
// append a new div to our output div
$("#output").append('<div class="text"><p>' + newText + '</p></div>');
});