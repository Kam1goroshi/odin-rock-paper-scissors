/**
 * Rock Paper Scissors game logic
 * 0: Rock
 * 1: Paper
 * 2: Scissors
 */
let computerHP = 5;
let playerHP = 5;

/**
 * Player enters a choice and the remaining HP is calculated
 * @param {number} choice : rock/paper/scissors as 0,1,2
 */
function makeChoice(choice) {
    const result = calculateVictory(choice, getComputerMove());
    if (result === 1)
        computerHP -= 1;
    else if (result === -1)
        playerHP -= 1;
    if (playerHP === 0) {
        console.log("player has won");
    } else if (computerHP === 0) {
        console.log("computer has won");
    }
}

/**
 * @returns random integer [0, 3)
 */
function getComputerMove() {
    return Math.floor((Math.random() * 3));
}

/**
 * @param {number} move the player move
 * @param {number} computerMove the computer move
 * @returns -1 on player defeat, 0 on tie, 1 on player victory
 */
function calculateVictory(move, computerMove) {
    if (move === computerMove)
        return 0;
    switch (move) {
        case 0:
            if (computerMove === 2)
                return 1;
            else
                return -1;
        case 1:
            if (computerMove === 0)
                return 1;
            else
                return -1;
        case 2:
            if (computerMove === 1)
                return 1;
            else
                return -1;
    }
}

document.querySelector(".rock").addEventListener('click', (e) => {
    makeChoice(0);
    console.log(playerHP + " " + computerHP);
})
document.querySelector(".paper").addEventListener('click', (e) => {
    makeChoice(1);
    console.log(playerHP + " " + computerHP);
})
document.querySelector(".scissor").addEventListener('click', (e) => {
    makeChoice(2);
    console.log(playerHP + " " + computerHP);
})

module.exports = calculateVictory;