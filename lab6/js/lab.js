// index.js - Lab 6 - Arrays and Objects
// Author: Sam Atilano <batilano@ucsc.edu>
// Date: 25 April

//Define Variables
myTransport = ["Honda Civic", "bus", "walking"]

//create an object for my main ride
myMainRide = {
  make: "Honda",
  model: "Civic",
  color: "gray",
  year: 2010,
  age: function() {
    return 2024 - this.year;
  }
}

//output
document.writeln("Types of transportation I use:", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
      JSON.stringify(myMainRide, null, '/t'), "</pre>");