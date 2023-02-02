// HELLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

//Pseudocode for buttons below
//Create function to lower the increment of the  hi counter
    // Create query Selector for <h1> -- 
    // create event listener on click for minus button
    // if counter =0 don't call the decrement function
    // create variable to selecct the h1 counter --
    // grab the value using the .value method -- 
    // create decrement function
        // apply the quest selector for the h1
        // then subtract 1 (decrement)
        // if value of h1 >0 then decrement else,

const minusButton = document.getElementById('minus');
const counter = document.querySelector('#counter');
const plusButton = document.getElementById('plus');

minusButton.addEventListener('click',handleDecrement)
plusButton.addEventListener('click',handleIncrement)

let numberValue = parseInt(counter.textContent, 10)

timeCounter ();

function updateDisplay(){
    counter.innerText = numberValue
}

function handleDecrement(){
    numberValue --;
    updateDisplay();
} 

function handleIncrement(){
    numberValue ++;
    updateDisplay();
} 

//Psuedocode for likes
// Create a fcuntion that creates a <li>
// populate the li
    // Grab Like button --
    // Add Event listener to button --
    // create a function to generate the string below
    // Define the variable likedValue
        // how many times it has been clicked, incrementing upwards
    // Grab number value we have declared, and string interpolate it into a string
        // `${numberValue} has been liked ${likedValue} times.`
        //if 
        
// append the li to the ul with a class of likes
    // grab the ul with class of likes  
  



const likeButton = document.getElementById('heart');
const ul = document.querySelector('.likes');
let likedCounter = 0

const emptyObject  = {}

likeButton.addEventListener('click', handleLikes);

function handleLikes(e){

    if(emptyObject.hasOwnProperty(numberValue)){
        // increment likedCounter

        function incrementLi(){
            likedCounter ++;
        };
        
    }; else {
        // build new LI with buildLi funcition
        function buildLi() {
            const newLi = document.createElement('li');
            newLi.setAttribute('id',numberValue);
            newLi.innerText = `${numberValue} has been liked ${likedCounter} times.`
    
            ul.append(newLi);
    
        };
        
        buildLi();
    }

   

}
// Will need to make an obj when page loads (empty obj) --
// [''] for each new entry for key
// check to see if number value exists in object as a key. if it exists, increment value at htat key, otherwise create a new value. 
// 2 seperate flows. Key exists, which means there must be an li, and key never exist. 
// need to update value and li of existing key. 
// run page and view source, inspect li and look at the id. once new id exists grab by new id.

// possibly use Object.prototype.hasOwnProperty()? to check to see if tag has a property equivalent to key.

//Counter

function timeCounter() {
    setInterval(handleIncrement,1000);
    if (/*pause button has been clicked*/){
        clearInterval
    }
};

//Pause Button

const pauseButton = document.querySelector('#pause');
pauseButton.addEventListener('click',handlePause)

function handlePause() {

}