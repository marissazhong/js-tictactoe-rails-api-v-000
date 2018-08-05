// Code your JavaScript / jQuery solution here

let @@win_combo = [
  [0,1,2],[3,4,5],[6,7,8], // horizontal rows
  [0,3,6],[1,4,7],[2,5,8], // vertical rows
  [0,4,8],[2,4,6] // diagonals
]

let turn = 0;
let currentGame = 0;

$(document).ready(function() {
  attachListeners();
});

function player() {
  return ( turn % 2 == 0 ? 'X' : 'O' );
}

function updateState(board) {

}
