const column = 10;
const row = [];
const board = [];

const generateCells = () => {
  const cell = Math.floor(Math.random() * 2);
  return cell;
};

const generateRows = () => {
  for (let i = 0; i < column; i++) {
    row.push(generateCells());
  }

  return row;
};

const generateBoard = () => {
  for (let i = 0; i < 10; i++) {
    board.push(generateRows());
  }

  return board;
};

generateBoard();
