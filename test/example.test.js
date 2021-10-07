import { didPlayerWin } from '../choices.js';
// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

test('user: rock, computer: paper', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'losses';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didPlayerWin('rock', 'paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('user: rock, computer: scissors', (expect) => {
    const expected = 'wins';
    const actual = didPlayerWin('rock', 'scissors');
    expect.equal(actual, expected);
});

test('user: rock, computer: rock', (expect) => {
    const expected = 'ties';
    const actual = didPlayerWin('rock', 'rock');
    expect.equal(actual, expected);
});

test('user: scissors, computer: paper', (expect) => {
    const expected = 'wins';
    const actual = didPlayerWin('scissors', 'paper');
    expect.equal(actual, expected);
});

test('user: scissors, computer: scissors', (expect) => {
    const expected = 'ties';
    const actual = didPlayerWin('scissors', 'scissors');
    expect.equal(actual, expected);
});

test('user: scissors, computer: rock', (expect) => {
    const expected = 'losses';
    const actual = didPlayerWin('scissors', 'rock');
    expect.equal(actual, expected);
});

test('user: paper, computer: paper', (expect) => {
    const expected = 'ties';
    const actual = didPlayerWin('paper', 'paper');
    expect.equal(actual, expected);
});

test('user: paper, computer: scissors', (expect) => {
    const expected = 'losses';
    const actual = didPlayerWin('paper', 'scissors');
    expect.equal(actual, expected);
});

test('user: paper, computer: rock', (expect) => {
    const expected = 'wins';
    const actual = didPlayerWin('paper', 'rock');
    expect.equal(actual, expected);
});



