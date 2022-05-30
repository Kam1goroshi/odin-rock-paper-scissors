/**
 * Rock Paper Scissors game logic
 * 0: Rock
 * 1: Paper
 * 2: Scissors
 */

/**
 * @returns random integer [0, 3)
 */
function getComputerMove(){
    return Math.floor((Math.random() * 3));
}

/**
 * @param {*} move the player move
 * @param {*} computerMove the computer move
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