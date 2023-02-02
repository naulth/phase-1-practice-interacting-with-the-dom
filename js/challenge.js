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
   

likeButton.addEventListener('click', handleLikes);



function handleLikes(e){

    if () {

    }

    function incrementLi(){
        likedCounter ++;
    };

    function buildLi() {
        const newLi = document.createElement('li');
        newLi.innerText = `${numberValue} has been liked ${likedCounter} times.`
        ul.append(newLi);
    };
    
    buildLi();
}

// Problem 1: Need to replace the numbervalue in each li until liked value changes
