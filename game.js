/**
 * Rock Paper Scissors game logic
 * 0: Rock
 * 1: Paper
 * 2: Scissors
 */

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

const maxComputerHP = 5;
const maxPlayerHP = 5;
let computerHP = 5;
let playerHP = 5;
const pseudoRoot = document.querySelector(":root");

function setComputerHP(hp){
    computerHP = hp;
    pseudoRoot.style.setProperty('--enemy-hp-percentage', Math.floor(((hp/maxComputerHP)*100)) + "%");
}

function setPlayerHP(hp){
    playerHP = hp;
    pseudoRoot.style.setProperty('--player-hp-percentage', Math.floor(((hp/maxPlayerHP)*100)) + "%");
}

/**
 * Player enters a choice and the remaining HP is calculated
 * @param {number} choice : rock/paper/scissors as 0,1,2
 */
function makeChoice(choice) {
    const result = calculateVictory(choice, getComputerMove());
    if (result === 1)
        setComputerHP(computerHP-1);
    else if (result === -1)
        setPlayerHP(playerHP-1);
    if (playerHP === 0) {
        console.log("Computer has won");
    } else if (computerHP === 0) {
        console.log("Player has won");
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


module.exports = calculateVictory;