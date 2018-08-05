// Code your JavaScript / jQuery solution here

let turn = 0;
var currentGame = 0;

$(document).ready(function() {
  attachListeners();
});

function player() {
  return ( turn % 2 == 0 ? 'X' : 'O' );
}

function updateState(board) {

}
