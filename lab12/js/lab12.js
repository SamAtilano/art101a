// index.js - Lab 10 - Javascript for the Web
// Author: Sam Atilano <batilano@ucsc.edu>
// Date: 17 May

//return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
//depending on length mod 4
function sortingHat(str) {
    len = str.length;
    mod = len % 4;
    let house = "";
    let description = "";

    if (mod == 0) {
        house = "Gryffindor";
        description = "Gryffindor house was created and named after Godric Gryffindor (one of the four founders of Hogwarts). Gryffindor students are known to have courageous and brave spirits, albiet a bit reckless. They are also known for their determination and make excellent duellers."
    }
    else if (mod == 1) {
        house = "Ravenclaw"
        description = "Ravenclaw house was created and named after Rowena Ravenclaw (one of the four founders of Hogwarts). Ravenclaw students are known for their intellect, wit, and wisdom. They are very academically motivated and pride themselves on being authentic in their ideas and methods."
    }
    else if (mod == 2) {
        house = "Slytherin"
        description = "Slytherin house was created and named after Salazar Slytherin (one of the four founders of Hogwarts). Slytherin students are known to be clever yet mischievous with great ambition and resourcefulness. They are also very determined and make strong, cunning leaders."
    }
    else if (mod == 3) {
        house = "Hufflepuff"
        description = "Hufflepuff house was created and named after Helga Hufflepuff (one of the four founders of Hogwarts). Hufflepuff students are known for their strong moral code, patience, loyalty, and inclusivity. They value hard work and are seen as nice, albiet almost to a fault."
    }
    return {house: house, description: description};
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function () {
    var name = document.getElementById("input").value;
    var result = sortingHat(name);
    var house = result.house;
    var description = result.description;
    newText = "<p> The Sorting Hat has sorted you into " + house + "!</p><p>" + description + "</p>";
    document.getElementById("output").innerHTML = newText;
});