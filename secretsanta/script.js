//make array of names
let names = [];
let outputText = document.querySelector("#output-text");
let printArray = [];
let input;
const randButton = document.querySelector('#random-button');
const storeButton = document.querySelector('#store-button');

const storeSound = new Audio("store-name-sound.mp3");
const clearSound = new Audio("clear-sound.mp3");
const randomSound = new Audio("randomize-names.mp3");




//store santa names
function storeSanta () {
  //0 grab input value and store in input
  input = document.querySelector('#input-name').value
  
  //1. make sure input is not empty
  if (input === "") {
    alert("Santa name can't be blank");
    
  }
  else {
    //2. store name in names-array
    names.push(input);
    //3. print names array to page
    outputText.innerHTML = (names);
    outputText.classList.remove("hidden");
    //4. clear input
    document.querySelector('#input-name').value = ('');

    storeSound.play();
    
    
  }
}

function clearSantas () {
  //Clear names array
  names = [];
  printArray = [];
  
  //make output invisible
  outputText.classList.add("hidden");
  
  //clear input field
  document.querySelector('#input-name').value = ('');

  //enable buttons
  randButton.disabled = false;
  storeButton.disabled = false;

  clearSound.play();

}



//execute functions
function randomSanta() {

    //must have at least 3 names
    if (names.length < 3) {
      alert("You need at least 3 santas");
    }

    else {
      //show output element
      outputText.classList.remove("hidden");

      
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

      //disable buttons
      randButton.disabled = true;
      storeButton.disabled = true;

      //play sound
      randomSound.play();
     
  }

    
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

