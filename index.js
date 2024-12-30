const moves = {
  X: [],
  O: [],
};
let currentPlayer = "X";

const checkMove = (playerMoves, move) => playerMoves.includes(move);

/**
 *
 * Winning combinations
 *
 * [1, 2, 3]
 * [4, 5, 6]
 * [7, 8, 9]
 * [1, 4, 7]
 * [2, 5, 8]
 * [3, 6, 9]
 * [1, 5, 9]
 * [3, 5, 7]
 *
 */

const checkWinner = (playerMoves) => {
  for (const move of playerMoves) {
    if (
      (move === 1 || move === 4 || move === 7) &&
      checkMove(playerMoves, move + 1) &&
      checkMove(playerMoves, move + 2)
    ) {
      return [move, move + 1, move + 2];
    }

    if (
      (move === 1 || move === 2 || move === 3) &&
      checkMove(playerMoves, move + 3) &&
      checkMove(playerMoves, move + 6)
    ) {
      return [move, move + 3, move + 6];
    }

    if (
      move === 1 &&
      checkMove(playerMoves, move + 4) &&
      checkMove(playerMoves, move + 8)
    ) {
      return [move, move + 4, move + 8];
    }

    if (
      move === 3 &&
      checkMove(playerMoves, move + 2) &&
      checkMove(playerMoves, move + 2)
    ) {
      return [move, move + 2, move + 2];
    }
  }

  return null;
};

const houseClick = (value) => {
  const cell = document.getElementById(value);

  if (cell.textContent !== "") {
    alert("This cell is filled already");
    return;
  }

  const indexNumber = Number(value.replace("h", ""));

  cell.textContent = currentPlayer;
  moves[currentPlayer].push(indexNumber);
  moves[currentPlayer].sort((a, b) => a - b);

  if (moves[currentPlayer].length >= 3) {
    const winnerCombination = checkWinner(moves[currentPlayer]);

    if (winnerCombination) {
      for (const winnerIndex of winnerCombination) {
        const winnerCell = document.getElementById(`h${winnerIndex}`);
        winnerCell.style.backgroundColor = "lightgreen";
        winnerCell.style.color = "green";
      }

      const winnerEl = document.getElementById("winner");

      if (winnerEl) {
        winnerEl.textContent = `${currentPlayer} won!`;
      }

      return;
    }
  }

  if (currentPlayer === "X") {
    cell.style.backgroundColor = "lightcoral";
    cell.style.color = "red";
    currentPlayer = "O";
  } else {
    cell.style.backgroundColor = "lightblue";
    cell.style.color = "blue";
    currentPlayer = "X";
  }

  cell.disabled = true;
};
