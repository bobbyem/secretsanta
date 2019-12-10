//make array of names
let names = [];

//get number of santas
let numberOfSantas = document.querySelector("#number");

//make randomize function
function randomSanta() {
  //grab names from form
  let santa0 = document.getElementById("santa0").value;
  let santa1 = document.getElementById("santa1").value;
  let santa2 = document.getElementById("santa2").value;

  //validate form
  if (santa0 === "" || santa1 === "" || santa2 === "") {
    alert("All santas must be named.");
  }

  //push names to array
  else {
    
    names.sort(function (a, b) { return 0.5 — Math.random() });

    names.push(santa0);
    names.push(santa1);
    names.push(santa2);
    //alert names
    alert(names);
  }
}

//move a random name into new array
