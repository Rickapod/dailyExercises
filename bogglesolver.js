// Boggle is a game played on a 4 x 4 grid of letters. The goal is to find as many words 
// as possible that can be formed by a sequence of adjacent letters in the grid, using each cell at most once. 
// Given a game board and a dictionary of valid words, implement a Boggle solver.
var fs = require('fs');

//Need a matrices of letters to create a 4x4 board
var makeBoard = (size) => {
  var board = [];
  var characters = 'abcdefghijklmnopqrstuvwxyz';
  for (var rows = 0; rows < size; rows++) {
    var row = [];
    for (var col = 0; col < size; col++) {
      row.push(characters.charAt(Math.floor(Math.random() * characters.length)));
    };
    board.push(row);
  };
  return board;
} 
var board = makeBoard(4);


//Need a dictionary to store valid words
var wordListPath = require('word-list');
 
var wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');
var valid = {}
for (var i = 0; i < wordArray.length; i ++){
  valid[wordArray[i]] = wordArray[i]
}

//need a list of combined words that are valid
var words = []

//you need to iterate over board 
//collect the adjacent letters for a position
//itrate over the collection of adjacent letter and assess all possible combinatioms
//check each combination against the valid word dictionary and store any matches in words if it doesn't already exist