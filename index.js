const houses = new Array(9).fill("");
let currentPlayer = "X";

const winnerCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

const checkWinner = () => {
  for (const combination of winnerCombinations) {
    const [cell1, cell2, cell3] = combination;

    if (
      houses[cell1 - 1] !== "" &&
      houses[cell1 - 1] === houses[cell2 - 1] &&
      houses[cell1 - 1] === houses[cell3 - 1]
    ) {
      return combination;
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

  const cellInddex = Number(value.replace("h", ""));

  cell.textContent = currentPlayer;
  houses[cellInddex - 1] = currentPlayer;

  const winnerCombination = checkWinner();

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
