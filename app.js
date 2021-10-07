import { didPlayerWin, computerRandom } from '../choices.js';

// import functions and grab DOM elements
const winCounter = document.getElementById('wincount');
const lossCounter = document.getElementById('losscount');
const tieCounter = document.getElementById('ties');
const fightButton = document.getElementById('fight');
// initialize global state

let wins = 0;
let losses = 0;
let ties = 0;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

fightButton.addEventListener('click', () => {
    const selected = document.querySelector('input[type=radio]:checked');
    const playerChoice = selected.value;
    const computerChoice = computerRandom();
    
    if (playerChoice === computerChoice){
        ties++;
    } else if (didPlayerWin(playerChoice, computerChoice) === 'wins'){
        wins++;
    } else {
        losses++; 
    }
        

    winCounter.textContent = wins;
    lossCounter.textContent = losses;
    tieCounter.textContent = ties;

});