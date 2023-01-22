const grid = 10;
const row = [];
export const board = [];

export const generateBoard = () => {
  const generateCells = () => {
    const cell = Math.floor(Math.random() * 2);
    return cell;
  };

  const generateRows = () => {
    for (let i = 0; i < grid; i++) {
      row.push(generateCells());
    }

    return row;
  };

  for (let i = 0; i < grid; i++) {
    board.push(generateRows());
  }

  return board;
};

generateBoard();
