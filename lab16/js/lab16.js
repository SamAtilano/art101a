// index.js - Lab 16 - JSON and APIs
// Author: Sam Atilano <batilano@ucsc.edu>
// Date: 7 June

let proxyURL = "https://api.allorigins.win/get?url=";
let URLpre = "https://xkcd.com/";
let URLpost = "info.0.json";
let comicNum = 0;

// Endpoint format: https://xkcd.com/614/info.0.json

// a helper function to turn single and double quotes into
// html symbols so they don't confuse html tags
//
function make_safe(str) {
  return str.replace(/'/g, '&apos;').replace(/"/g, '&quot;');
}

function getComic(num) {
  let numStr = num ? num + "/" : "";
  let ourURL = URLpre + numStr + URLpost;
  let finalURL = proxyURL + encodeURIComponent(ourURL)
  console.log("Our new URL:", finalURL);
  // Using the core $.ajax() method
  $.ajax({
      url: finalURL,
      // Whether this is a POST or GET request
      type: "GET",
      dataType: "json",
  })
  // If the request succeeds
  .done(function(data) {
    let parsedData = JSON.parse(data.contents);
    console.log(parsedData);
     
      let title = parsedData.title;
      let imgURL = parsedData.img;
      let alt = parsedData.alt;

      comicNum = parsedData.num;

      let htmlOutput = `
      <h2>${make_safe(title)}</h2>
      <img src="${imgURL}" alt="${make_safe(alt)}" title="${make_safe(alt)}">
        <p>${make_safe(alt)}</p>
        `;

        $("#output").html(htmlOutput);
  })
  .fail(function () {
    console.log("Error!");
  });
}

// event listeners for nav buttons
$("#prev").click(function() {
  getComic(comicNum - 1);
});

$("#next").click(function() {
  getComic(comicNum + 1);
});

//start things off
getComic();

