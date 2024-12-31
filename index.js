let currentPlayer = 'X';
let playsArray = new Array(9).fill("i");
console.log(playsArray);

function houseClick(value) {
    const cell = document.getElementById(value);
    
    if (cell.textContent !== '') {
        console.log("This cell is filled already");
        return;
    }

    console.log(value);
    const indexNumber = value.replace("h","");
    console.log(indexNumber);
    console.log(typeof(indexNumber));
    const indexNumberInt = Number(indexNumber);
    console.log(typeof(indexNumberInt));

    cell.textContent = currentPlayer; 
    // playsArray.push(currentPlayer);
    playsArray[indexNumberInt - 1] = currentPlayer; //assign the currentplayer value to the playsArray current index
    console.log(playsArray);

    console.log(`${currentPlayer} played on house ${value}`);

    // if(playsArray[0] === playsArray[3] && playsArray[0] === playsArray[6]){
    //     console.log("You won");
    // }

    if (checkWinner()) {
        console.log(`${currentPlayer} wins!`);
        return;
    }

    if (currentPlayer === 'X') { // the current player is X so we need to put the varaivel to O so in the next move the O is printed, above the cell.textContent is already X so we can changehere
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }
}

function checkWinner(){
    const combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]  
    ];

     // Check each winning combination
     for (const combination of combinations) {
        const [a, b, c] = combination;
        if (
            playsArray[a] !== "i" &&
            playsArray[a] === playsArray[b] &&
            playsArray[a] === playsArray[c]
        ) {
            return true;
        }
    }

    return false;
}


