// index.js - Lab 10 - Javascript for the Web
// Author: Sam Atilano <batilano@ucsc.edu>
// Date: 17 May

// Sorts the characters of a string in alphabetical order
function sortString(inputString) {
    return inputString.split('').sort().join('');
}

// Checks if two strings are anagrams
function areAnagrams(str1, str2) {
    // If lengths are different, they cannot be anagrams
    if (str1.length !== str2.length) {
        return false;
    }
    // Sort both strings and compare
    return sortString(str1) === sortString(str2);
}

// Click listener for button
$("#submit").click(function() {
    // Get value of input fields
    const userName = $("#user-name").val();
    const anagramName = $("#anagram-name").val();
    
    // Check if they are anagrams
    const result = areAnagrams(userName, anagramName);
    
    // Display the result
    let resultMessage = userName + ' and ' + anagramName + ' are ';
    resultMessage += result ? 'anagrams!' : 'not anagrams.';
    
    // Append the result to the output div
    $("#output").html('<div class="text"><p>' + resultMessage + '</p></div>');
});