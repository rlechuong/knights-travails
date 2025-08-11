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
  let queue = [];
  queue.push({ parent: null, position: startSquare });

  while (
    queue.length > 0 &&
    (queue[0].position[0] !== targetSquare[0] ||
      queue[0].position[1] !== targetSquare[1])
  ) {
    let current = queue[0];
    let legalMoves = getLegalMoves(current.position);
    console.log(queue);
    for (const move of legalMoves) {
      queue.push({ parent: current, position: move });
    }

    queue.shift();
  }

  console.log(targetSquare[0]);
  console.log(targetSquare[1]);
  console.log(queue[0].position[0]);
  console.log(queue[0].position[1]);
  console.dir(queue[0]);
}

console.log(knightMoves([0, 0], [7, 7]));

// console.log(getLegalMoves([0, 0]));
// console.log(getLegalMoves([7, 7]));
// console.log(getLegalMoves([3, 3]));
// console.log(getLegalMoves([0, 3]));
// console.log(getLegalMoves([3, 0]));
