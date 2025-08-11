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

function knightMoves(startSquare, targetSquare) {
  const queue = [];
  const visitedSquares = [];
  queue.push({ parent: null, square: startSquare });
  visitedSquares.push(startSquare);

  while (
    queue.length > 0 &&
    (queue[0].square[0] !== targetSquare[0] ||
      queue[0].square[1] !== targetSquare[1])
  ) {
    const current = queue[0];
    const legalMoves = getLegalMoves(current.square);

    for (const move of legalMoves) {
      if (!isVisited(move, visitedSquares)) {
        queue.push({ parent: current, square: move });
        visitedSquares.push(move);
      }
    }

    queue.shift();
  }

  const result = [];
  let currentNode = queue[0];

  while (currentNode !== null) {
    result.unshift(currentNode.square);
    currentNode = currentNode.parent;
  }

  console.log(`You made it in ${result.length - 1} moves! Here's your path:`);
  for (const square of result) {
    console.log(square);
  }

  return result;
}

function isVisited(square, visitedSquares) {
  for (let i = 0; i < visitedSquares.length; i++) {
    if (
      square[0] === visitedSquares[i][0] &&
      square[1] === visitedSquares[i][1]
    ) {
      return true;
    }
  }

  return false;
}

console.log(knightMoves([0, 0], [3, 3]));
console.log(knightMoves([3, 3], [0, 0]));
console.log(knightMoves([0, 0], [7, 7]));
console.log(knightMoves([3, 3], [4, 3]));
