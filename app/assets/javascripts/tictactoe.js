// Code your JavaScript / jQuery solution here

let WIN_COMBO = [
  [0,1,2],[3,4,5],[6,7,8], // horizontal rows
  [0,3,6],[1,4,7],[2,5,8], // vertical rows
  [0,4,8],[2,4,6] // diagonals
];

let turn = 0;
let currentGame = 0;

$(document).ready(function() {
  attachListeners();
});

function player() {
  return ( turn % 2 == 0 ? 'X' : 'O' );
}

function updateState(position) {
  let token = player();
  $(position).text(token);
}

function setMessage(message) {
  $('#message').text(message);
}

function checkWinner() {
  let board = [];
  let winner = "";

  $('td').text();

  WIN_COMBO.forEach(function(combo) {
    if () {
      setMessage(`Player ${board[combo[0]]} Won!`);
    }
  });
}

function doTurn(position) {
  updateState(position);
  turn ++;
  if (checkWinner()) {
    saveGame();
    clearBoard();
  } else if (turn === 9) {
    setMessage("Tie game.");
    saveGame();
    clearBoard();
  }
}

function attachListeners() {
  $('td').on('click', function() {
    if (!$.text(this) && !checkWinner()) {
      doTurn(this);
    }
  });

  $('#save').on('click', () => saveGame());
  $('#previous').on('click', () => showPreviousGames());
  $('#clear').on('click', () => resetBoard());
}

function clearBoard() {
  $('td').empty();
  turn = 0;
  currentGame = 0;
  }
}
