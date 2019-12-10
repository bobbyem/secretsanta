//make array of names
let names = [];
let outputText = document.querySelector("#output-text");
let testArray = ["Bobby", "Billy", "Renee", "Birgitta"];
let printArray = [];

//get number of santas
// let numberOfSantas = document.querySelector("#number");

//make randomize function
function randomSanta() {
  //clear array
  names = [];
  
  //grab names from form
  let santa0 = document.getElementById("santa0").value;
  let santa1 = document.getElementById("santa1").value;
  let santa2 = document.getElementById("santa2").value;

  //validate form
  if (santa0 === "" || santa1 === "" || santa2 === "") {
    alert("All santas must be named.");
  }

  
  else {
    
    //push names to array
    names.push(santa0);
    names.push(santa1);
    names.push(santa2);
    
  }
    
    //shuffle santas
    shuffleArray(names);
    
    //duplicate first santa in array
    dupliFirst(names);

    //alert santas
    printSantas(names);

    //scroll into view
    outputText.scrollIntoView();

    //clear print array
    printArray = [];

    
  };

//shuffle array function
function shuffleArray (arr) {
  let newPosition, temp;

  for (let i = arr.length - 1; i > 0; i--) {
    
    newPos = Math.floor(Math.random () * (i + 1));
    temp = arr[i];
    arr[i] = arr[newPos];
    arr[newPos] = temp;
}
  return arr;
};

//create last name duplicate function
function dupliFirst (arr) {
  let firstName = arr[0];
  arr.push(firstName);
}

function printSantas (arr) {
  for (let i = 0; i< arr.length -1 ; i++) {

      //pair up names   
      printArray.push(arr[i] + " gifts " + arr[i +1] + "<br/>");

        //print array when at second to last index
        if (i == arr.length -2) {

          outputText.innerHTML = (printArray.join("")); // .join("") removes commas from array
      
      }
  

  
    
  }

  
}
