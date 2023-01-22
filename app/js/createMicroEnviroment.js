const board = [
  [1, 1, 1, 0, 0, 1, 1],
  [0, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 1, 1],
  [1, 0, 0, 0, 0, 1, 0],
];
const temporaryCellEnviroment = [];
const createCellEnviroment = (rowIndex, index) => {
  if (rowIndex === 0 && index === 0) {
    temporaryCellEnviroment.push(board[rowIndex].slice(index, 2));
    temporaryCellEnviroment.push(board[rowIndex + 1].slice(index, 2));
  } else if (rowIndex === 0 && index === board[rowIndex].length - 1) {
    temporaryCellEnviroment.push(board[rowIndex].slice(-2));
    temporaryCellEnviroment.push(board[rowIndex + 1].slice(-2));
  } else if (
    rowIndex === board.length - 1 &&
    index === board[rowIndex].length - 1
  ) {
    temporaryCellEnviroment.push(board[rowIndex - 1].slice(-2));
    temporaryCellEnviroment.push(board[rowIndex].slice(-2));
  } else if (rowIndex === board.length - 1 && index === 0) {
    temporaryCellEnviroment.push(board[rowIndex - 1].slice(index, 2));
    temporaryCellEnviroment.push(board[rowIndex].slice(index, 2));
  } else {
    temporaryCellEnviroment.push(
      board[rowIndex - 1].slice(index - 1, index + 2)
    );
    temporaryCellEnviroment.push(board[rowIndex].slice(index - 1, index + 2));
    temporaryCellEnviroment.push(
      board[rowIndex + 1].slice(index - 1, index + 2)
    );
  }
};

createCellEnviroment(2, 1);
