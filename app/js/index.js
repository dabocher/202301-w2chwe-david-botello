const board = [
  [1, 0, 1],
  [0, 1, 1],
  [1, 0, 0],
];
let cellsAlive = 0;

for (const row of board) {
  cellsAlive += row.reduce((total, cell) => total + cell, 0);
}

if (board[1][1] === 1) {
  board[1][1] = 0;
  if (cellsAlive >= 3 && cellsAlive <= 4) {
    board[1][1] = 1;
  }
} else if (board[1][1] === 0 && cellsAlive === 3) {
  board[1][1] = 1;
}
