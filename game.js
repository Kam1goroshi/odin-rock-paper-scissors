/**
 * Rock Paper Scissors game logic
 * 0: Rock
 * 1: Paper
 * 2: Scissors
 */

const maxComputerHP = 5;
const maxPlayerHP = 5;
let computerHP = 5;
let playerHP = 5;
const pseudoRoot = document.querySelector(":root");
const panel = document.querySelector('.panel');
let gameOver = false;
/**
 * Remove all children from the
 */
function clearPanel() {
    while (panel.firstChild) {
        panel.removeChild(panel.firstChild);
    }
}

/**
 * Plays the given choice and updates css and hp
 * @param {number} choice 0=rock ,1=paper, 2=scissors
 */
function play(choice) {
    if(gameOver)
        return;
    const computerChoice = makeChoice(choice);
    if (playerHP === 0) {
        victory(1); //computer has won
        gameOver = true;
        return;
    } else if (computerHP === 0) {
        victory(0); //player has won
        gameOver = true;
        return;
    }

    clearPanel();
    const playerMoveImg = document.createElement('img');
    const computerMoveImg = document.createElement('img');
    switch (choice) {
        case 0:
            playerMoveImg.src = 'images/rock.png';
            break;
        case 1:
            playerMoveImg.src = 'images/paper.png';
            break;
        case 2:
            playerMoveImg.src = 'images/scissors.png';
            break;
    }
    switch (computerChoice) {
        case 0:
            computerMoveImg.src = 'images/rock.png';
            break;
        case 1:
            computerMoveImg.src = 'images/paper.png';
            break;
        case 2:
            computerMoveImg.src = 'images/scissors.png';
            break;
    }
    panel.appendChild(playerMoveImg);
    panel.appendChild(computerMoveImg);
    console.log(playerHP + " " + computerHP);
}


document.querySelector(".rock").addEventListener('click', () => { play(0) });
document.querySelector(".paper").addEventListener('click', () => { play(1) });
document.querySelector(".scissor").addEventListener('click', () => { play(2) });


/**
 * Victory function. Ends the game and displays appropriate message on the pannel.
 * @param {*} winner 0=player, 1=computer
 */
function victory(winner) {
    console.log("Player has won");
    clearPanel();
    const promptMessage = document.createElement('p');
    promptMessage.textContent = 'Refresh the browser to play again';
    const victoryMsg = document.createElement('h2');
    if (winner === 0)
        victoryMsg.textContent = "You won!";
    else if (winner === 1)
        victoryMsg.textContent = "Unlucky..";
    panel.appendChild(victoryMsg);
    panel.appendChild(promptMessage);
}

function setComputerHP(hp) {
    computerHP = hp;
    pseudoRoot.style.setProperty('--enemy-hp-percentage', Math.floor(((hp / maxComputerHP) * 100)) + "%");
}

function setPlayerHP(hp) {
    playerHP = hp;
    pseudoRoot.style.setProperty('--player-hp-percentage', Math.floor(((hp / maxPlayerHP) * 100)) + "%");
}

/**
 * Player enters a choice and the remaining HP is calculated
 * @param {number} choice : rock/paper/scissors as 0,1,2
 */
function makeChoice(choice) {
    let computerMove = Math.floor((Math.random() * 3));
    const result = calculateVictory(choice, computerMove);
    if (result === 1)
        setComputerHP(computerHP - 1);
    else if (result === -1)
        setPlayerHP(playerHP - 1);
    return computerMove;
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