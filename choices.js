export function didPlayerWin(playerChoice, computerChoice){
    if (playerChoice === computerChoice) {
        return 'ties';
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        return 'losses';
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        return 'losses';
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        return 'losses';
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        return 'wins';
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        return 'wins';
    } else (playerChoice === 'rock' && computerChoice === 'scissors'); 
    return 'wins';
}

export function computerRandom(){
    return ['rock', 'paper', 'scissors'][(Math.round(Math.random() * 3))];
}
