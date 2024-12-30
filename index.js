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

    if(playsArray[0] === playsArray[3] && playsArray[0] === playsArray[6]){
        console.log("You won");
    }

    if (currentPlayer === 'X') { // the current player is X so we need to put the varaivel to O so in the next move the O is printed, above the cell.textContent is already X so we can changehere
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }
}
