// HELLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

const minusButton = document.getElementById('minus');
const counter = document.querySelector('#counter');
minusButton.addEventListener('click',handleDecrement)

let numberValue = parseInt(counter.textContent, 10)

function handleDecrement(){
     console.log(numberValue--)
} 

counter.innerText = handleDecrement()

//Pseudocode below
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

// const minusButton = document.getElementById('minus');
// const counter = document.querySelector('#counter');
// minusButton.addEventListener('click',handleDecrement)

// let numberValue = parseInt(counter.textContent, 10)

// function handleDecrement(){
//      return numberValue --
// } 

// counter = numberValue --