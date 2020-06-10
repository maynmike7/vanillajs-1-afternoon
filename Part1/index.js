// const name = 'mike';
// console.log(name);

const board = [];

function play(clickedId) {

    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedId);
    const topLeft = board[0];
    const topCenter = board[1];
    const topRight = board[2];
    const middleLeft = board[3];
    const middleCenter = board[4];
    const middleRight = board[5];
    const bottomLeft = board[6];
    const bottomCenter = board[7];
    const bottomRight = board[8];

    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        board[clickedId] = 'X';
    } else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        board[clickedId] = 'O';
    }

    if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
        alert(`${topLeft} IS THE WINNER!`);
    } else if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
        alert(`${middleLeft} IS THE WINNER!`)
    } else if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
        alert(`${bottomLeft} IS THE WINNER!`)
    } else if (topLeft !== undefined && topLeft === middleLeft && topLeft == bottomLeft) {
        alert (`${topLeft} IS THE WINNER!`)
    } else if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
        alert (`${topCenter} IS THE WINNER!`)
    } else if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        alert (`${topRight} IS THE WINNER!`)
    } else if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
        alert (`${topLeft} IS THE WINNER!`)
    } else if (topRight !== undefined && topRight === middleCenter && topRight === bottomLeft) {
        alert (`${topRight} IS THE WINNER!`)
    }

    let boardFull = true;

    for (let i = 0; i <= 8; i++) {
        if (board[i] === undefined) {
            boardFull = false;
        }
    }
    
    if (boardFull === true) {
        alert ('CAT WINS')
    }
    
    console.log(board)
}