// IMPORT MODULES under test here:
import { didPlayerWin } from '../choices.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('user: rock, computer: paper', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didPlayerWin(actual, expected);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('user: rock, computer: scissors', (expect) => {
    const expected = true;
    const actual = didPlayerWin(actual, expected);
    expect.equal(actual, expected);
});

test('user: rock, computer: rock', (expect) => {
    const expected = draw;
    const actual = didPlayerWin(actual, expected);
    expect.equal(actual, expected);
});

test('user: scissors, computer: paper', (expect) => {
    const expected = true;
    const actual = didPlayerWin(actual, expected);
    expect.equal(actual, expected);
});

test('user: scissors, computer: scissors', (expect) => {
    const expected = draw;
    const actual = didPlayerWin(actual, expected);
    expect.equal(actual, expected);
});

test('user: scissors, computer: rock', (expect) => {
    const expected = false;
    const actual = didPlayerWin(actual, expected);
    expect.equal(actual, expected);
});

test('user: paper, computer: paper', (expect) => {
    const expected = draw;
    const actual = didPlayerWin(actual, expected);
    expect.equal(actual, expected);
});

test('user: papers, computer: scissors', (expect) => {
    const expected = false;
    const actual = didPlayerWin(actual, expected);
    expect.equal(actual, expected);
});

test('user: paper, computer: rock', (expect) => {
    const expected = true;
    const actual = didPlayerWin(actual, expected);
    expect.equal(actual, expected);
});



