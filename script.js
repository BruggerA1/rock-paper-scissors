/* FUNCTIONS */
function newGame() {
	playerScore = computerScore = 0;
	showPlayerScore.innerText = playerScore;
	showComputerScore.innerText = computerScore;
	showRoundResult.innerText = '';
}
function playerTurn(move) {
	return move;
}
function computerTurn() {
	let move = Math.floor(Math.random() * 5 + 1);

	switch (move) {
		case 1:
			return 'Rock';
			break;
		case 2:
			return 'Paper';
			break;
		case 3:
			return 'Scissors';
			break;
		case 4:
			return 'Lizard';
			break;
		case 5:
			return 'Spock';
			break;
	}
}
function playMatch(playerTurn, computerTurn) {
	switch (playerTurn) {
		case 'Rock':
			switch (computerTurn) {
				case 'Rock':
					showRoundResult.innerText = `TIE!
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Tie';
					break;
				case 'Paper':
					showRoundResult.innerText = `YOU LOSE! Paper Covers Rock.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Lose';
					break;
				case 'Scissors':
					showRoundResult.innerText = `YOU WIN! Rock Crushes Scissors.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Win';
					break;
				case 'Lizard':
					showRoundResult.innerText = `YOU WIN! Rock Bashes Lizard.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Win';
					break;
				case 'Spock':
					showRoundResult.innerText = `YOU LOSE! Spock Vaporizes Rock.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Lose';
					break;
			}
			break;
		case 'Paper':
			switch (computerTurn) {
				case 'Rock':
					showRoundResult.innerText = `YOU WIN! Paper Covers Rock.
					Player: ${playerTurn}.
					Computer: ${computerTurn}`;
					return 'Win';
					break;
				case 'Paper':
					showRoundResult.innerText = `TIE!
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Tie';
					break;
				case 'Scissors':
					showRoundResult.innerText = `YOU LOSE! Scissors Cuts Paper.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Lose';
					break;
				case 'Lizard':
					showRoundResult.innerText = `YOU LOSE! Lizard Eats Paper.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Lose';
					break;
				case 'Spock':
					showRoundResult.innerText = `YOU WIN! Paper Disproves Spock.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Win';
					break;
			}
			break;
		case 'Scissors':
			switch (computerTurn) {
				case 'Rock':
					showRoundResult.innerText = `YOU LOSE! Rock Crushes Scissors.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Lose';
					break;
				case 'Paper':
					showRoundResult.innerText = `YOU WIN! Scissors Cuts Paper.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Win';
					break;
				case 'Scissors':
					showRoundResult.innerText = `TIE!
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Tie';
					break;
				case 'Lizard':
					showRoundResult.innerText = `YOU WIN! Scissors Decapitates Lizard.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Win';
					break;
				case 'Spock':
					showRoundResult.innerText = `YOU LOSE! Spock Smashes Scissors.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Lose';
					break;
			}
			break;
		case 'Lizard':
			switch (computerTurn) {
				case 'Rock':
					showRoundResult.innerText = `YOU LOSE! Rock Bashes Lizard.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Lose';
					break;
				case 'Paper':
					showRoundResult.innerText = `YOU WIN! Lizard eats Paper.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Win';
					break;
				case 'Scissors':
					showRoundResult.innerText = `YOU LOSE! Scissors Decapitates Lizard.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Lose';
					break;
				case 'Lizard':
					showRoundResult.innerText = `TIE!
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Tie';
					break;
				case 'Spock':
					showRoundResult.innerText = `YOU WIN! izard Poisons Spock.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Win';
					break;
			}
			break;
		case 'Spock':
			switch (computerTurn) {
				case 'Rock':
					showRoundResult.innerText = `YOU WIN! Spock Vaporizes Rock.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Win';
					break;
				case 'Paper':
					showRoundResult.innerText = `YOU LOSE! Paper disproves Spock.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Lose';
					break;
				case 'Scissors':
					showRoundResult.innerText = `YOU WIN! Spock Smashes Scissors.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Win';
					break;
				case 'Lizard':
					showRoundResult.innerText = `YOU LOSE! Lizard Poisons Spock.
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Lose';
					break;
				case 'Spock':
					showRoundResult.innerText = `TIE!
					Player: ${playerTurn}
					Computer: ${computerTurn}`;
					return 'Tie';
					break;
			}
			break;
	}
}
function evalResult(result) {
	switch (result) {
		case 'Win':
			playerScore++;
			showPlayerScore.innerText = playerScore;
			if (playerScore >= 5) {
				gameOver();
				document.getElementById('end-result').innerText = 'YOU WIN';
			}
			break;
		case 'Lose':
			computerScore++;
			showComputerScore.innerText = computerScore;
			if (computerScore >= 5) {
				gameOver();
				document.getElementById('end-result').innerText = 'YOU LOSE... 😂';
			}
			break;
		case 'Tie':
			break;
	}
}
function gameOver() {
	gameScreen.style.display = 'none';
	endScreen.style.display = 'block';
}
// added v2.1
function newGameScreen() {
	menuScreen.style.display = 'none';
	gameScreen.style.display = 'block';
	newGame();
}
function howToOpen() {
	modalWindow.style.position = 'fixed';
	howToVideo.src = 'https://www.youtube.com/embed/x5Q6-wMx-K8';
}
function howToClose() {
	modalWindow.style.position = 'static';
	howToVideo.src = '';
}
function mainMenuScreen() {
	endScreen.style.display = 'none';
	menuScreen.style.display = 'block';
}
function playMove(e) {
	let move = e.target.getAttribute('data-move');
	evalResult(playMatch(playerTurn(move), computerTurn()));
}

/* VARIABLES */
let move;
let playerScore;
let computerScore;

let menuScreen = document.getElementById('main-menu');
let endScreen = document.getElementById('end-game');
let gameScreen = document.getElementById('game-screen');

let newGameButton = document.getElementById('button-newgame');
let howToPlayButton = document.getElementById('button-howto');
let mainMenu = document.getElementById('end-button-menu');

let modalWindow = document.getElementById('modal-menu-window');
let modalClose = document.getElementById('modal-menu-close');
let howToVideo = document.getElementById('howto-video');

let showPlayerScore = document.getElementById('score-player-points');
let showComputerScore = document.getElementById('score-computer-points');
let showRoundResult = document.getElementById('round-result');

let playerRock = document.getElementById('player-icon-rock');
let playerPaper = document.getElementById('player-icon-paper');
let playerScissors = document.getElementById('player-icon-scissors');
let playerLizard = document.getElementById('player-icon-lizard');
let playerSpock = document.getElementById('player-icon-spock');

let computerRock = document.getElementById('computer-icon-rock');
let computerPaper = document.getElementById('computer-icon-paper');
let computerScissors = document.getElementById('computer-icon-scissors');
let computerLizard = document.getElementById('computer-icon-lizard');
let computerSpock = document.getElementById('computer-icon-spock');

/* EVENT LISTENERS */
newGameButton.addEventListener('click', newGameScreen);
howToPlayButton.addEventListener('click', howToOpen);
modalClose.addEventListener('click', howToClose);
mainMenu.addEventListener('click', mainMenuScreen);

playerRock.addEventListener('click', playMove);
playerPaper.addEventListener('click', playMove);
playerScissors.addEventListener('click', playMove);
playerLizard.addEventListener('click', playMove);
playerSpock.addEventListener('click', playMove);
