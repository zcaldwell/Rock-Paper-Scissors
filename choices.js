export function playerWon(playerChoice, computerChoice){
    if (playerChoice === computerChoice) {
        return draw;
    } else if ( playerChoice === 'rock' && computerChoice === 'scissors') {
        return true;
    } else if ( playerChoice === 'rock' && computerChoice === 'paper') {
        return false;
    } else if ( playerChoice === 'paper' && computerChoice === 'rock') {
        return true;
    } else if ( playerChoice === 'paper' && computerChoice === 'scissors') {
        return false;
    } else if ( playerChoice === 'scissors' && computerChoice === 'rock') {
        return false;
    } else if ( playerChoice === 'scisors' && computerChoice === 'paper') {
        return true;
    }
    
    


export function computerRandom(){
    return ['rock', 'paper', 'scissors'][(Math.round(Math.random(2)))];
}
