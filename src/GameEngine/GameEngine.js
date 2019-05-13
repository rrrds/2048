export function genField() {
  const arr = shuffle([2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  return arr.reduce(
    (acc, val, idx) => {
      acc[idx % 4].push(val);
      return acc;
    },
    [[], [], [], []]
  );
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

export function makeMove(matrix, direction) {
  const result = moveMatrix(matrix, direction);

  console.log(result);

  if (JSON.stringify(matrix) !== JSON.stringify(result.matrix)) {
    result.matrix = addNewCell(result.matrix);
  }

  return result;
}

function moveMatrix(matrix, direction) {
  switch (direction) {
    case "ArrowUp":
      return mergeToUp(matrix);
    case "ArrowRight":
      return mergeToRight(matrix);
    case "ArrowDown":
      return mergeToDown(matrix);
    case "ArrowLeft":
      return mergeToLeft(matrix);
    default:
      return { matrix: matrix, sum: 0 };
  }
}

function mergeToUp(matrix) {
  const result = mergeToLeft(rotateCCW(matrix));
  return { matrix: rotateCW(result.matrix), sum: result.sum };
}

function mergeToRight(matrix) {
  const result = mergeToLeft(rotateCCW(rotateCCW(matrix)));
  return { matrix: rotateCW(rotateCW(result.matrix)), sum: result.sum };
}

function mergeToDown(matrix) {
  const result = mergeToLeft(rotateCW(matrix));
  return { matrix: rotateCCW(result.matrix), sum: result.sum };
}

function addNewCell(matrix) {
  const flatMatrix = matrix.flat();
  const freeCells = flatMatrix.filter(cell => cell === 0).length;

  if (freeCells === 0) {
    return matrix;
  }

  const position = Math.floor(Math.random() * Math.floor(freeCells));
  const idx = findIndex(flatMatrix, position);
  matrix[Math.floor(idx / 4)][idx % 4] = 2;
  return matrix;
}

function findIndex(arr, pos) {
  if (pos === 0) {
    return arr.indexOf(0);
  }

  let foundPos = 0;
  let foundIdx = 0;
  while (foundPos !== pos) {
    foundIdx = arr.indexOf(0, foundIdx + 1);
    foundPos++;
  }

  return foundIdx;
}

function flipMatrix(matrix) {
  return matrix[0].map((col, idx) => {
    return matrix.map(row => row[idx]);
  });
}

function rotateCW(matrix) {
  return flipMatrix(matrix.reverse());
}

function rotateCCW(matrix) {
  return flipMatrix(matrix).reverse();
}

function mergeToLeft(matrix) {
  let sum = 0;

  const mergedMatrix = matrix.map(row => {
    const newRow = [0, 0, 0, 0];
    let newIdx = 0;

    row.map((cell, idx) => {
      if (cell !== 0) {
        if (newRow[newIdx] === 0) {
          newRow[newIdx] += cell;
        } else if (newRow[newIdx] === cell) {
          newRow[newIdx] += cell;
          newIdx++;
          sum += cell * 2;
        } else {
          newRow[++newIdx] = cell;
        }
      }
    });

    return newRow;
  });

  return { matrix: mergedMatrix, sum };
}

function hasEmptyCells(matrix) {
  const flatMatrix = matrix.flat();
  const freeCells = flatMatrix.filter(cell => cell === 0).length;

  return freeCells > 0;
}
