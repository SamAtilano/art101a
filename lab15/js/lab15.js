// index.js - Lab 15 - AJAX
// Author: Sam Atilano <batilano@ucsc.edu>
// Date: 3 June

// Define the makeRequest function
function makeRequest() {
    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request (from the API docs)
        url: "https://yesno.wtf/api",
        // The data to send (will be converted to a query string)
        data: {
            // Here is where any data required by the API goes (check the API docs)
            // For this API, no data is needed
        },
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType: "json",
        // What do we do when the API call is successful
        // All the action goes in here
        success: function(data) {
            // Do stuff
            console.log(data);
            // Display the answer on the page
            $('#yes-no').html('<h2>Yes or No?</h2><p>' + data.answer + '</p>');
            // Convert data to JSON string and display it
            $('#output').html('<h2>Output</h2><pre>' + JSON.stringify(data, null, 2) + '</pre>');
        },
        // What do we do if the API call fails
        error: function (jqXHR, textStatus, errorThrown) {
            // Do stuff
            console.log("Error:", textStatus, errorThrown);
        }
    });
}

// Add a click event listener
document.getElementById('activate').addEventListener('click', makeRequest);
