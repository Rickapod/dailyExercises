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
console.log(board);

//Need a dictionary to store valid words
var wordListPath = require('word-list');
 
var wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');
var valid = {};
for (var i = 0; i < wordArray.length; i ++){
  valid[wordArray[i]] = wordArray[i];
};

//need a list of combined words that are valid
var words = [];

//create a function that will get all possible combination of an array of letters
var getCombinations = (chars) => {
      var result = [];
      var helper = (prefix, chars) => {
        for (var i = 0; i < chars.length; i++) {
          result.push(prefix + chars[i]);
          helper(prefix + chars[i], chars.slice(i + 1));
        }
      }
    helper('', chars);
    return result;
 }
//you need to iterate over board 
for (var i = 0; i < board.length; i++) {
  //collect the adjacent letters for a position
  for (var el = 0; el <board[i].length; el++) {
    var adjascentLetters = [board[i][el]];
    if(board[i-1]){
      adjascentLetters.push(board[i-1][el]);
    };
    if(board[i+1]){
      adjascentLetters.push(board[i+1][el]);
    };
    if (board[i][el-1]){
      adjascentLetters.push(board[i][el-1]);
      if(board[i-1]){
        adjascentLetters.push(board[i-1][el-1]);
      };
      if(board[i+1]){
        adjascentLetters.push(board[i+1][el-1]);
      };
    };
    if (board[i][el+1]){
      adjascentLetters.push(board[i][el+1]);
      if(board[i-1]){
        adjascentLetters.push(board[i-1][el+1]);
      };
      if(board[i+1]){
        adjascentLetters.push(board[i+1][el+1]);
      };
    };
    var combinations = getCombinations(adjascentLetters);
    
    for (var w = 0; w < combinations.length; w++){
      if (valid[combinations[w]] && !words.includes(combinations[w])){
        words.push(combinations[w]);
      };
    };
  };
};
console.log(words)

//itrate over the collection of adjacent letter and assess all possible combinatioms
//check each combination against the valid word dictionary and store any matches in words if it doesn't already exist