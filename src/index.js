import "./styles.css";

function getLegalMoves(square) {
  const x = square[0];
  const y = square[1];
  const legalMoves = [];

  // [1, 2]
  if (x + 1 <= 7 && y + 2 <= 7) {
    legalMoves.push([x + 1, y + 2]);
  }

  // [2, 1]
  if (x + 2 <= 7 && y + 1 <= 7) {
    legalMoves.push([x + 2, y + 1]);
  }

  // [2, -1]
  if (x + 2 <= 7 && y - 1 >= 0) {
    legalMoves.push([x + 2, y - 1]);
  }

  // [1, -2]
  if (x + 1 <= 7 && y - 2 >= 0) {
    legalMoves.push([x + 1, y - 2]);
  }

  // [-1, -2]
  if (x - 1 >= 0 && y - 2 >= 0) {
    legalMoves.push([x - 1, y - 2]);
  }

  // [-2, -1]
  if (x - 2 >= 0 && y - 1 >= 0) {
    legalMoves.push([x - 2, y - 1]);
  }

  // [-2, 1]
  if (x - 2 >= 0 && y + 1 <= 7) {
    legalMoves.push([x - 2, y + 1]);
  }

  // [-1, 2]
  if (x - 1 >= 0 && y + 2 <= 7) {
    legalMoves.push([x - 1, y + 2]);
  }

  return legalMoves;
}

console.log(getLegalMoves([0, 0]));
console.log(getLegalMoves([7, 7]));
console.log(getLegalMoves([3, 3]));
console.log(getLegalMoves([0, 3]));
console.log(getLegalMoves([3, 0]));
