// Boggle is a game played on a 4 x 4 grid of letters. The goal is to find as many words 
// as possible that can be formed by a sequence of adjacent letters in the grid, using each cell at most once. 
// Given a game board and a dictionary of valid words, implement a Boggle solver.


//Need a matrices of letters to create a 4x4 grid
var board = []

//Need a dictionary to store valid words
var valid = {}

//need a list of combined words that are valid
var words = []

//you need to iterate over board 
//collect the adjacent letters for a position
//itrate over the collection of adjacent letter and assess all possible combinatioms
//check each combination against the valid word dictionary and store any matches in words if it doesn't already exist